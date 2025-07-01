import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button, Box, Typography } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { IAddAndEditModalProps } from "@/types";
import FormInputs from "./FormInputs";
import useAddAndEditModal from "@/hooks/useAddAndEditModal";

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

const AddAndEditModal = ({
  open,
  handleClose,
  columnName,
  task,
}: IAddAndEditModalProps) => {
  const { methods, loading, handleSubmit, onSubmit, handleCloseButton } =
    useAddAndEditModal({ open, handleClose, columnName, task });

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
                <FormInputs columnName={columnName} task={task} />
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
                    disabled={loading}
                  >
                    {loading ? "Loading..." : task?.id ? "Update" : "Create"}
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
