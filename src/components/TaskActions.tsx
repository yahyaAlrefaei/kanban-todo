import { CardActions, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
import MenuIcon from "./Icons/MenuIcon";
import DeleteAlert from "./DeleteAlert";
import { deleteTask } from "@/lib/api";
import { ITask } from "@/types";
import AddAndEditModal from "./AddAndEditModal/AddAndEditModal";
import { revalidateTasks } from "@/utils/revalidateTasks";

const TaskActions = ({ task }: { task: ITask }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConfirmDelete = async () => {
    try {
      if (task.id) {
        await deleteTask(task.id);
      }
      setOpenDeleteAlert(false);
      revalidateTasks("tasks");
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <>
      <DeleteAlert
        open={openDeleteAlert}
        handleClose={() => setOpenDeleteAlert(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
      <AddAndEditModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        task={task}
      />
      <CardActions sx={{ justifyContent: "flex-end", p: 0 }}>
        <IconButton
          aria-label="more"
          aria-controls={open ? "task-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ p: "3px", borderRadius: "0" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="task-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => setOpenEditModal(true)}>
            <EditIcon />
          </MenuItem>
          <MenuItem onClick={() => setOpenDeleteAlert(true)}>
            <DeleteIcon />
          </MenuItem>
        </Menu>
      </CardActions>
    </>
  );
};

export default TaskActions;
