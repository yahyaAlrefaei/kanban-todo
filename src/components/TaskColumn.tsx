"use client";

import { ITask, TColumn } from "@/types";
import TaskCard from "./TaskCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Box, Typography } from "@mui/material";
import formatColumnName from "@/utils/formatName";
import { useDroppable } from "@dnd-kit/core";
import AddTaskButton from "./AddTaskButton";
import AddAndEditModal from "./AddAndEditModal/AddAndEditModal";
import { useState } from "react";

export interface ITaskColumnProps {
  column: {
    title: string;
    tasks: ITask[];
  };
}

const TaskColumn = ({ column }: ITaskColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.title,
  });
  const [open, setOpen] = useState(false);
  const [columnNameSelected, setColumnNameSelected] = useState<TColumn>();
  const handleOpen = (columnName: string) => {
    setColumnNameSelected(columnName as TColumn);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <>
      {columnNameSelected && (
        <AddAndEditModal
          open={open}
          handleClose={handleClose}
          columnName={columnNameSelected}
        />
      )}

      <Box
        ref={setNodeRef}
        sx={{
          padding: 2,
          backgroundColor: isOver ? "#e3f2fd" : "#f1f2f4",
          borderRadius: 1,
          minHeight: 400,
          transition: "background-color 0.2s ease",
          border: isOver ? "2px dashed #1976d2" : "2px solid transparent",
          minWidth: "275px",
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 2, fontSize: "20px" }}>
          {formatColumnName(column.title)} ({column.tasks.length})
        </Typography>
        <SortableContext
          items={column.tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} columnName={column.title} />
          ))}
        </SortableContext>
        <AddTaskButton handleOpen={() => handleOpen(column.title)} />
      </Box>
    </>
  );
};

export default TaskColumn;
