"use client";
import HomePageHeader from "@/components/HomePageHeader";
import TaskBoard from "@/components/TaskBoard";
import useTaskStore from "@/lib/store";
import { IHomeProps } from "@/types";
import { Container } from "@mui/material";
import { useEffect } from "react";

const Home = ({ data }: IHomeProps) => {
  const { setTasks } = useTaskStore();
  useEffect(() => {
    setTasks(data);
  }, [data, setTasks]);
  return (
    <Container sx={{ my: 4 }} maxWidth="xl">
      <HomePageHeader />
      <TaskBoard />
    </Container>
  );
};

export default Home;
