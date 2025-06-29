import { IAddTaskButtonProps } from "@/types";
import { Button } from "@mui/material";

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
        bgcolor: "#fff",
      }}
      color="primary"
      onClick={handleOpen}
    >
      +
    </Button>
  );
};

export default AddTaskButton;
