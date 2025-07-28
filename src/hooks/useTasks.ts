import useLocalStorage from "use-local-storage"
import { TASKS_KEYS, type Task } from "../models/task"

export default function useTasks(){
    
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEYS, []);

    return{
        tasks,
        tasksCount: tasks.length,
        concluded: tasks.filter((task) => task.concluded).length
    }
}