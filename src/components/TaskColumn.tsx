"use client";

import { ITaskColumnProps } from "@/types";
import TaskCard from "./TaskCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Box, Typography } from "@mui/material";
import formatColumnName from "@/utils/formatName";

import AddTaskButton from "./AddTaskButton";
import AddAndEditModal from "./AddAndEditModal/AddAndEditModal";
import useTaskColumn from "@/hooks/useTaskColumn";

interface TaskColumnProps extends ITaskColumnProps {
  searchQuery: string;
}

const TaskColumn = ({ column, searchQuery }: TaskColumnProps) => {
  const {
    setNodeRef,
    isOver,
    open,
    columnNameSelected,
    visibleTasks,
    handleOpen,
    handleClose,
    observerRef,
    filteredTasks,
  } = useTaskColumn(column, searchQuery);

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
          minHeight: "calc(100vh - 200px)",
          maxHeight: "calc(100vh - 200px)",
          transition: "background-color 0.2s ease",
          border: isOver ? "2px dashed #1976d2" : "2px solid transparent",
          minWidth: "310px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 250px)",
            paddingRight: 1,
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: 2, fontSize: "20px" }}>
            {formatColumnName(column.title)} ({filteredTasks.length})
          </Typography>
          <SortableContext
            items={filteredTasks.map(
              (task) => task.id ?? `task-${Math.random()}`
            )}
            strategy={verticalListSortingStrategy}
          >
            {filteredTasks.slice(0, visibleTasks).map((task) => (
              <TaskCard key={task.id} task={task} columnName={column.title} />
            ))}
          </SortableContext>
          <div ref={observerRef} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "95%",
            bgcolor: "#f1f2f4",
            p: 1,
          }}
        >
          <AddTaskButton handleOpen={() => handleOpen(column.title)} />
        </Box>
      </Box>
    </>
  );
};

export default TaskColumn;
