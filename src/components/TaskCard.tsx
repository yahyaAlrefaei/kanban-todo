import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const TaskCard = () => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h3" sx={{ color: "black", fontSize: "18px" }}>
          Task Name
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
