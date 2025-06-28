import { Button } from "@mui/material";

export interface IAddTaskButtonProps {
  handleOpen: () => void;
}

const AddTaskButton = ({ handleOpen }: IAddTaskButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "100%",
        borderStyle: "dashed",
        height: "50px",
        borderWidth: "2px",
        borderRadius: "4px",
        fontSize: "20px",
      }}
      color="primary"
      onClick={handleOpen}
    >
      +
    </Button>
  );
};

export default AddTaskButton;
