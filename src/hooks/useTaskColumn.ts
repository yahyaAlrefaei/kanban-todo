import { ITask, TColumn } from "@/types";
import { useDroppable } from "@dnd-kit/core";
import { useEffect, useMemo, useRef, useState } from "react";

const useTaskColumn = (
  column: { title: string; tasks: ITask[] },
  searchQuery: string
) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.title,
  });
  const [open, setOpen] = useState(false);
  const [columnNameSelected, setColumnNameSelected] = useState<TColumn>();
  const [visibleTasks, setVisibleTasks] = useState(5);
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
  return {
    setNodeRef,
    isOver,
    open,
    columnNameSelected,
    visibleTasks,
    setVisibleTasks,
    handleOpen,
    handleClose,
    observerRef,
    filteredTasks,
  };
};

export default useTaskColumn;
