import HomePageHeader from "@/components/HomePageHeader";
import TaskBoard from "@/components/TaskBoard";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <HomePageHeader />
      <TaskBoard />
    </Container>
  );
};

export default Home;
