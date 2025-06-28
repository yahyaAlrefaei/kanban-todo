export type TColumn = "backlog" | "in_progress" | "review" | "done";

export interface IHomeProps {
  data: ITask[];
}

export interface ITask {
  id?: number;
  title: string;
  description: string;
  column: TColumn;
}

export interface ITasks {
  tasks: ITask[];
}

export interface IAddTaskButtonProps {
  handleOpen: () => void;
}

export interface IDeleteAlertProps {
  open: boolean;
  handleClose: () => void;
  handleConfirmDelete: () => void;
}

export interface ITaskCardProps {
  task: ITask;
  columnName: string;
}

export interface ITaskColumnProps {
  column: {
    title: string;
    tasks: ITask[];
  };
}

export interface IAddAndEditModalProps {
  open: boolean;
  handleClose: () => void;
  columnName?: TColumn;
  task?: ITask;
}
