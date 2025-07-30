import useLocalStorage from "use-local-storage";
import { TASK_STATE, TASKS_KEYS, type Task } from "../models/task";
import { useState } from "react";
import { delay } from "../helpers/utils";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEYS, []);
    const [isUpdatingTask, setIsUpdatingTask] = useState(false);
    const [isDeletingTask, setIsDeletingTask] = useState(false);

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TASK_STATE.Creating
        }])
    }

    async function updateTask(id: string, payload: { title: Task["title"] }) {
        setIsUpdatingTask(true);
        await delay(500);
        setTasks(
            tasks.map((task) => task.id === id
                ?
                { ...task, state: TASK_STATE.Created, ...payload }
                :
                task
            )
        );
        setIsUpdatingTask(false);
    }

    async function updateStatus(id: string, concluded: boolean) {
        setIsUpdatingTask(true);
        await delay(500);
        setTasks(
            tasks.map((task) => task.id === id ? { ...task, concluded } : task)
        )
        setIsUpdatingTask(false);
    }

    async function deleteTask(id:string){
        setIsDeletingTask(true);
        await delay(500);
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
        setIsDeletingTask(false);
    }

    return {
        prepareTask,
        updateTask,
        updateStatus,
        deleteTask,
        isUpdatingTask,
        isDeletingTask
    }
}