import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./taskItem";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";
import { TASK_STATE, type Task } from "../models/task";

export default function TaskList({ }) {

    const { tasks, loading } = useTasks();
    const { prepareTask } = useTask();

    function handleNewTask() {
        prepareTask();
    }

    return (
        <>
            <section>
                <Button
                    onClick={handleNewTask}
                    className="w-full"
                    icon={PlusIcon}
                    disabled={tasks.some((task) => task.state === TASK_STATE.Creating) || loading}
                >
                    Nova Tarefa
                </Button>
            </section>
            <section className="space-y-2">
                {!loading && tasks.map((task) =>
                    <TaskItem key={task.id} task={task} />
                )}
                {loading &&
                    <>
                        <TaskItem task={{} as Task} loading />
                        <TaskItem task={{} as Task} loading />
                        <TaskItem task={{} as Task} loading />
                    </>
                }

            </section>

        </>
    )
}