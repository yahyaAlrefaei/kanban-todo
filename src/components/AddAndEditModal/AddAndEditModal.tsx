import * as React from "react";
import Modal from "@mui/material/Modal";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Box, Typography } from "@mui/material";
import { taskSchema } from "./form.validation";
import { TColumn } from "@/types";
import { createTask, fetchTasks } from "@/lib/api";
import FormInputs from "./FormInputs";
import useTaskStore from "@/lib/store";

interface ITaskFormData {
  title: string;
  description: string;
  column: TColumn;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "4px",
  p: 4,
};

export interface IAddAndEditModalProps {
  open: boolean;
  handleClose: () => void;
  columnName: TColumn;
}

const AddAndEditModal = ({
  open,
  handleClose,
  columnName,
}: IAddAndEditModalProps) => {
  const methods = useForm<ITaskFormData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      column: null as unknown as TColumn,
    },
  });

  const { handleSubmit, reset } = methods;
  const { setTasks } = useTaskStore();

  const onSubmit = async (data: ITaskFormData) => {
    console.log("data....", data);

    try {
      await createTask(data);
      reset();
      handleClose();
      const updatedTasks = await fetchTasks();
      setTasks(updatedTasks ?? []);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const handleCloseButton = () => {
    reset();
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Typography
              variant="h4"
              sx={{ mb: 2, color: "#1976d2", fontSize: "20px" }}
            >
              Add Task
            </Typography>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <FormInputs columnName={columnName} />
                <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                  <Button
                    sx={{ flex: 1 }}
                    onClick={handleCloseButton}
                    variant="outlined"
                    color="error"
                    size="large"
                  >
                    Close
                  </Button>
                  <Button
                    sx={{ flex: 1 }}
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </FormProvider>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default AddAndEditModal;
