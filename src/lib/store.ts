import { ITask } from "@/types";
import { UniqueIdentifier } from "@dnd-kit/core";
import { create } from "zustand";
import { updateTask } from "./api";

type ColumnType = "backlog" | "in_progress" | "review" | "done";

interface IUseTaskStore {
  tasks: ITask[];
  taskColumns: {
    backlog: ITask[];
    in_progress: ITask[];
    review: ITask[];
    done: ITask[];
  };
  setTasks: (tasks: ITask[]) => void;
  moveTask: ({
    fromColumn,
    toColumn,
    taskId,
  }: {
    fromColumn: ColumnType;
    toColumn: ColumnType;
    taskId: UniqueIdentifier;
  }) => void;
}

const useTaskStore = create<IUseTaskStore>((set) => ({
  tasks: [],
  taskColumns: {
    backlog: [],
    in_progress: [],
    review: [],
    done: [],
  },
  setTasks: (tasks) =>
    set({
      tasks: tasks,
      taskColumns: {
        backlog: tasks.filter((task) => task.column === "backlog"),
        in_progress: tasks.filter((task) => task.column === "in_progress"),
        review: tasks.filter((task) => task.column === "review"),
        done: tasks.filter((task) => task.column === "done"),
      },
    }),

  moveTask: ({ fromColumn, toColumn, taskId }) => {
    set((state) => {
      const task = state.taskColumns[fromColumn].find((t) => t.id === taskId);
      if (!task) return state;

      // تحديث العمود في المهمة
      const updatedTask = { ...task, column: toColumn };

      // تحديث المهمة في الخادم
      updateTask(updatedTask).catch((error) => {
        console.error("Failed to update task on server:", error);
      });

      return {
        tasks: state.tasks.map((t) => (t.id === taskId ? updatedTask : t)),
        taskColumns: {
          ...state.taskColumns,
          [fromColumn]: state.taskColumns[fromColumn].filter(
            (t) => t.id !== taskId
          ),
          [toColumn]: [updatedTask, ...state.taskColumns[toColumn]],
        },
      };
    });
  },
}));

export default useTaskStore;
