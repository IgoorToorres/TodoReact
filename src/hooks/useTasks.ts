import useLocalStorage from "use-local-storage"
import { TASK_STATE, TASKS_KEYS, type Task } from "../models/task"
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {

    const [tasksData] = useLocalStorage<Task[]>(TASKS_KEYS, []);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchTasks() {
        if (loading) {
            await delay(2000);
            setLoading(false);
        }
        setTasks(tasksData);
    }

    useEffect(() => {
        fetchTasks();
    }, [tasksData])

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === TASK_STATE.Created).length,
        concluded: tasks.filter((task) => task.concluded).length,
        loading,
    }
}