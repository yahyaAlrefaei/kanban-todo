"use client";

import { Grid } from "@mui/material";
import TaskColumn from "./TaskColumn";
import useTaskStore from "@/lib/store";
import { DndContext, closestCenter } from "@dnd-kit/core";
import useDndBoard from "@/hooks/useDndBoard";

const TaskBoard = () => {
  const { taskColumns } = useTaskStore();
  const { handleDragEnd, sensors } = useDndBoard();

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Grid container spacing={1}>
        {Object.entries(taskColumns).map(([key, value]) => (
          <Grid key={key} item xs={3}>
            <TaskColumn column={{ title: key, tasks: value }} />
          </Grid>
        ))}
      </Grid>
    </DndContext>
  );
};

export default TaskBoard;
