import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import InputCheckbox from "../components/inputCheckbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import InputText from "../components/inputText";
import { TASK_STATE, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";


interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {

    const [isEditing, setIsEditing] = useState(task?.state == TASK_STATE.Creating);
    const [taskTitle, setTaskTitle] = useState(task.title || "");
    const {
        updateTask,
        updateStatus,
        deleteTask,
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

    function handleSaveTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({
            id: task.id,
            taskTitle: taskTitle,
        });
        updateTask(task.id, { title: taskTitle });
        setIsEditing(false);
    }

    function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;
        updateStatus(task.id, checked);
    }

    const handleDeleteTask = () => {
        deleteTask(task.id);
    }

    return (
        <Card size="md">
            {!isEditing ? (
                <div className="flex itmens-center gap-4">
                    <InputCheckbox onChange={handleChangeTaskStatus} checked={task?.concluded} />
                    <Text
                        className={cx("flex-1", {
                            "line-through": task?.concluded,
                        })}
                    >
                        {task?.title}
                    </Text>
                    <div className="flex gap-1">
                        <ButtonIcon onClick={handleDeleteTask} icon={TrashIcon} variant="tertiary" />
                        <ButtonIcon
                            icon={PencilIcon}
                            variant="tertiary"
                            onClick={handelEditTask}
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
                        />
                    </div>
                </form >
            )}

        </Card>
    )
}