"use client";
import { ITaskCardProps } from "@/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TaskActions from "./TaskActions";

const TaskCard = ({ task, columnName }: ITaskCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id ?? `task-${Math.random()}`,
    data: {
      columnName,
      taskId: task.id,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      sx={{
        minWidth: 275,
        mb: 2,
        cursor: isDragging ? "grabbing" : "grab",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "space-between",
          pb: "16px !important",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: "black", fontSize: "18px" }}>
            {task.title}
          </Typography>
          {task.description && (
            <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
              {task.description}
            </Typography>
          )}
        </Box>
        <TaskActions task={task} />
      </CardContent>
    </Card>
  );
};

export default TaskCard;
