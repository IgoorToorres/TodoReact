export const TASKS_KEYS = "tasks";

export const TASK_STATE = {
    Created: 'created',
    Creating: 'creating',
} as const;

export type TaskState = typeof TASK_STATE[keyof typeof TASK_STATE];

export interface Task {
    id: string,
    title: string,
    concluded?: boolean,
    state?: TaskState
}