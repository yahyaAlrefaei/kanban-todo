import { create } from "zustand";

interface IUseTaskStore {
  tasks: number;
}

const useTaskStore = create<IUseTaskStore>((set) => ({
  tasks: 0,
  setTasks: (tasks: number) => set({ tasks }),
}));

export default useTaskStore;
