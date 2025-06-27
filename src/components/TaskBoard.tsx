import { Grid } from "@mui/material";
import TaskColumn from "./TaskColumn";

const TaskBoard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <TaskColumn />
      </Grid>
      <Grid size={3}>
        <TaskColumn />
      </Grid>
      <Grid size={3}>
        <TaskColumn />
      </Grid>
      <Grid size={3}>
        <TaskColumn />
      </Grid>
    </Grid>
  );
};

export default TaskBoard;
