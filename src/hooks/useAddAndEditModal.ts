import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTask, updateTask } from "@/lib/api";
import { useEffect, useState } from "react";
import { revalidateTasks } from "@/utils/revalidateTasks";
import { taskSchema } from "@/components/AddAndEditModal/form.validation";
import { IAddAndEditModalProps, ITaskFormData, TColumn } from "@/types";

const useAddAndEditModal = ({
  open,
  handleClose,
  columnName,
  task,
}: IAddAndEditModalProps) => {
  const methods = useForm<ITaskFormData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      column: null as unknown as TColumn,
    },
  });

  const [loading, setLoading] = useState(false);

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: ITaskFormData) => {
    setLoading(true);
    try {
      if (task?.id) {
        await updateTask({ ...data, id: task.id });
      } else {
        await createTask(data);
      }
      reset();
      handleClose();
      revalidateTasks("tasks");
    } catch (error) {
      console.error("Failed to save task:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseButton = () => {
    reset();
    handleClose();
  };

  // Update form values when editing a task
  useEffect(() => {
    if (task && open) {
      reset({
        title: task.title,
        description: task.description,
        column: task.column,
      });
    } else if (open && columnName) {
      reset({
        title: "",
        description: "",
        column: columnName,
      });
    }
  }, [task, open, columnName, reset]);
  return {
    methods,
    loading,
    handleSubmit,
    onSubmit,
    handleCloseButton,
  };
};

export default useAddAndEditModal;
