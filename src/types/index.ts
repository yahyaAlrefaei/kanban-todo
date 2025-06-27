export type TColumn = "backlog" | "in_progress" | "review" | "done";

export interface ITask {
  id?: number;
  title: string;
  description: string;
  column: TColumn;
}

export interface ITasks {
  tasks: ITask[];
}
