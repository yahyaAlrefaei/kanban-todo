import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "./Icons/DeleteIcon";
import { IDeleteAlertProps } from "@/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteAlert = ({
  open,
  handleClose,
  handleConfirmDelete,
}: IDeleteAlertProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 6 }}>
            <Box sx={{ p: 2, borderRadius: "4px", bgcolor: "#ff000014" }}>
              <DeleteIcon icon />
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to delete the task?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Button
              sx={{ flex: 1 }}
              onClick={handleClose}
              variant="outlined"
              size="large"
            >
              Close
            </Button>
            <Button
              onClick={handleConfirmDelete}
              sx={{ flex: 1 }}
              type="submit"
              variant="contained"
              size="large"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteAlert;
