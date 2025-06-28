import { ITask } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const fetchTasks = async () => {
  try {
    const response = await axios.get<ITask[]>(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (task: Omit<ITask, "id"> | ITask) => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTask = async (task: ITask) => {
  try {
    const response = await axios.put(`${BASE_URL}/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
