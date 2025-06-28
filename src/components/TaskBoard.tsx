"use client";

import { Grid, Box } from "@mui/material";
import TaskColumn from "./TaskColumn";
import SearchBar from "./SearchBar";
import useTaskStore from "@/lib/store";
import { DndContext, closestCenter } from "@dnd-kit/core";
import useDndBoard from "@/hooks/useDndBoard";
import { useState } from "react";

const TaskBoard = () => {
  const { taskColumns } = useTaskStore();
  const { handleDragEnd, sensors } = useDndBoard();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Box sx={{ maxWidth: "300px", mt: 2 }}>
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      </Box>

      {/* 🧩 Drag and Drop Context */}
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <Grid container spacing={1}>
          {Object.entries(taskColumns).map(([key, value]) => (
            <Grid key={key} item xs={12} sm={6} md={3}>
              <TaskColumn
                column={{ title: key, tasks: value }}
                searchQuery={searchQuery}
              />
            </Grid>
          ))}
        </Grid>
      </DndContext>
    </>
  );
};

export default TaskBoard;
