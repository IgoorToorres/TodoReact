import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import InputCheckbox from "../components/inputCheckbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import InputText from "../components/inputText";
import { TASK_STATE, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";
import Skeleton from "../components/skeleton";


interface TaskItemProps {
    task: Task;
    loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {

    const [isEditing, setIsEditing] = useState(task?.state == TASK_STATE.Creating);
    const [taskTitle, setTaskTitle] = useState(task.title || "");
    const [checked, setChecked] = useState(task?.concluded || false);
    const {
        updateTask,
        updateStatus,
        deleteTask,
        isUpdatingTask,
        isDeletingTask,
    } = useTask();

    function handelEditTask() {
        setIsEditing(true);
    }

    function handleExitEditTask() {
        if (task.state === TASK_STATE.Creating) {
            deleteTask(task.id);
        }
        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "");
    }

    async function handleSaveTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await updateTask(task.id, { title: taskTitle });
        setIsEditing(false);
    }

    useEffect(() => {
        updateStatus(task.id, checked);
    }, [checked])

    async function handleDeleteTask(){
        await deleteTask(task.id);
    }

    return (
        <Card size="md">
            {!isEditing ? (
                <div className="flex itmens-center gap-4">
                    <InputCheckbox
                        onChange={(e) => setChecked(e.target.checked)}
                        checked={checked}
                        loading={loading}
                    />
                    {!loading ? <Text
                        className={cx("flex-1", {
                            "line-through": task?.concluded,
                        })}
                    >
                        {task?.title}
                    </Text> : <Skeleton className="flex-1 h-6" />}
                    <div className="flex gap-1">
                        <ButtonIcon
                            onClick={handleDeleteTask}
                            icon={TrashIcon}
                            variant="tertiary"
                            loading={loading}
                            handling={isDeletingTask}
                        />
                        <ButtonIcon
                            icon={PencilIcon}
                            variant="tertiary"
                            onClick={handelEditTask}
                            loading={loading}
                        />
                    </div>
                </div>
            ) : (
                <form className="flex itmens-center gap-4" onSubmit={handleSaveTask}>
                    <InputText
                        value={taskTitle}
                        className="flex-1"
                        required
                        autoFocus
                        onChange={handleChangeTaskTitle}
                    />
                    <div className="flex gap-1">
                        <ButtonIcon
                            type="button"
                            icon={XIcon}
                            variant="secondary"
                            onClick={handleExitEditTask}
                        />
                        <ButtonIcon
                            type="submit"
                            icon={CheckIcon}
                            variant="primary"
                            handling={isUpdatingTask}
                        />
                    </div>
                </form >
            )}

        </Card>
    )
}