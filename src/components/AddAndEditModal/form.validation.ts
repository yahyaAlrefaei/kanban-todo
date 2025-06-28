import * as yup from "yup";

export const taskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  column: yup
    .string()
    .oneOf(["backlog", "in_progress", "review", "done"], "Invalid status")
    .required("Status is required"),
});
