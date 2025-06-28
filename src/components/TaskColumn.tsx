"use client";

import { ITaskColumnProps, TColumn } from "@/types";
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
import { useEffect, useRef, useState, useMemo } from "react";

interface TaskColumnProps extends ITaskColumnProps {
  searchQuery: string;
}

const TaskColumn = ({ column, searchQuery }: TaskColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.title,
  });
  const [open, setOpen] = useState(false);
  const [columnNameSelected, setColumnNameSelected] = useState<TColumn>();
  const [visibleTasks, setVisibleTasks] = useState(3);
  const handleOpen = (columnName: string) => {
    setColumnNameSelected(columnName as TColumn);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const filteredTasks = useMemo(() => {
    if (!searchQuery) return column.tasks;
    return column.tasks.filter((task) =>
      `${task.title} ${task.description}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, column.tasks]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleTasks((prev) => Math.min(prev + 5, filteredTasks.length));
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [filteredTasks.length]);

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
          paddingRight: 0,
          backgroundColor: isOver ? "#e3f2fd" : "#f1f2f4",
          borderRadius: 1,
          minHeight: "calc(100vh - 100px)",
          maxHeight: "calc(100vh - 100px)",
          transition: "background-color 0.2s ease",
          border: isOver ? "2px dashed #1976d2" : "2px solid transparent",
          minWidth: "310px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 200px)",
            paddingRight: 1,
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: 2, fontSize: "20px" }}>
            {formatColumnName(column.title)} ({filteredTasks.length})
          </Typography>
          <SortableContext
            items={filteredTasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {filteredTasks.slice(0, visibleTasks).map((task) => (
              <TaskCard key={task.id} task={task} columnName={column.title} />
            ))}
          </SortableContext>
          <div ref={observerRef} />
        </Box>
        <AddTaskButton handleOpen={() => handleOpen(column.title)} />
      </Box>
    </>
  );
};

export default TaskColumn;
