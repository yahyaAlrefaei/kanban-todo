import { CardActions, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
import MenuIcon from "./Icons/MenuIcon";

const TaskActions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
  };

  const handleDelete = () => {
    handleClose();
  };
  return (
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
        <MenuItem onClick={handleEdit}>
          <EditIcon />
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon />
        </MenuItem>
      </Menu>
    </CardActions>
  );
};

export default TaskActions;
