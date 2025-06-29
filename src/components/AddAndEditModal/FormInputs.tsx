import { Controller, useFormContext } from "react-hook-form";
import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { ITask, TColumn } from "@/types";
import { useEffect } from "react";

const FormInputs = ({
  columnName,
  task,
}: {
  columnName?: TColumn;
  task?: ITask;
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const statusOptions = [
    { label: "Backlog", value: "backlog" },
    { label: "In Progress", value: "in_progress" },
    { label: "Review", value: "review" },
    { label: "Done", value: "done" },
  ];

  useEffect(() => {
    if (columnName) {
      setValue("column", columnName);
    }
  }, [columnName, setValue]);

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("column", task.column);
    }
  }, [task, setValue]);

  return (
    <>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Title"
            error={!!errors.title}
            helperText={
              typeof errors.title?.message === "string"
                ? errors.title.message
                : undefined
            }
            FormHelperTextProps={{
              sx: { margin: 0 },
            }}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={
              typeof errors.description?.message === "string"
                ? errors.description.message
                : undefined
            }
            FormHelperTextProps={{
              sx: { margin: 0 },
            }}
          />
        )}
      />

      <Controller
        name="column"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.column}>
            <InputLabel id="column-label">Status</InputLabel>
            <Select
              labelId="column-label"
              id="column"
              value={field.value || ""}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              label="Status"
            >
              {statusOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ m: 0 }}>
              {errors.column?.message as string}
            </FormHelperText>
          </FormControl>
        )}
      />
    </>
  );
};

export default FormInputs;
