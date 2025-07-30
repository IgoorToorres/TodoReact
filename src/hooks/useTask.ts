import useLocalStorage from "use-local-storage";
import { TASK_STATE, TASKS_KEYS, type Task } from "../models/task";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEYS, []);

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TASK_STATE.Creating
        }])
    }

    function updateTask(id: string, payload: { title: Task["title"] }) {
        setTasks(
            tasks.map((task) => task.id === id
                ?
                { ...task, state: TASK_STATE.Created, ...payload }
                :
                task
            )
        );
    }

    function updateStatus(id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) => task.id === id ? { ...task, concluded } : task)
        )
    }

    function deleteTask(id:string){
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
    }

    return {
        prepareTask,
        updateTask,
        updateStatus,
        deleteTask
    }
}