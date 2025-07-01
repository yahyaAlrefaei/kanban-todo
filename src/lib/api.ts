import { ITask } from "@/types";
import axios from "axios";
import toast from "react-hot-toast";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

const handleRequest = async <T>(
  request: () => Promise<{ data: T }>,
  successMessage: string,
  errorMessage: string
): Promise<T> => {
  try {
    const { data } = await request();
    toast.success(successMessage);
    return data;
  } catch (error) {
    toast.error(errorMessage);
    throw error;
  }
};

export const createTask = (task: Omit<ITask, "id">) =>
  handleRequest(
    () => axios.post(`${BASE_URL}/tasks`, task),
    "Task created successfully!",
    "Failed to create task."
  );

export const updateTask = (task: ITask) =>
  handleRequest(
    () => axios.put(`${BASE_URL}/tasks/${task.id}`, task),
    "Task updated successfully!",
    "Failed to update task."
  );

export const deleteTask = (id: number) =>
  handleRequest(
    () => axios.delete(`${BASE_URL}/tasks/${id}`),
    "Task deleted.",
    "Failed to delete task."
  );
