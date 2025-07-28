export const TASKS_KEYS = "tasks";

export type TaskState = "creating" | "created";

export interface Task{
    id: string,
    title: string,
    concluded?: boolean,
    state?: TaskState
}