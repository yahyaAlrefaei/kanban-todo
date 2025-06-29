import useTaskStore from "@/lib/store";
import {
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";

const useDndBoard = () => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );
  const { moveTask } = useTaskStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const activeColumn = active.data.current?.columnName;
    let overColumn: string;

    if (over.data?.current?.columnName) {
      overColumn = over.data.current.columnName;
    } else {
      overColumn = over.id as string;
    }

    if (!activeColumn || !overColumn) return;

    if (activeColumn === overColumn) return;

    moveTask({
      fromColumn: activeColumn as any,
      toColumn: overColumn as any,
      taskId: active.id,
    });
  };

  return { sensors, handleDragEnd };
};

export default useDndBoard;
