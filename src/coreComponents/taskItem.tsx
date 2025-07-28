import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import InputCheckbox from "../components/inputCheckbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useState } from "react";
import InputText from "../components/inputText";

export default function TaskItem({ }) {

    const [isEditing, setIsEditing] = useState(false);

    function handelEditTask() {
        setIsEditing(true);
    }

    function handleExitEditTask() {
        setIsEditing(false);
    }

    return (
        <Card className="flex itmens-center gap-4" size="md">
            {!isEditing ? (
                <>
                    <InputCheckbox />
                    <Text className="flex-1">Fazer compras da semana</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="tertiary" />
                        <ButtonIcon
                            icon={PencilIcon}
                            variant="tertiary"
                            onClick={handelEditTask}
                        />
                    </div>
                </>
            ) : (
                <>
                    <InputText className="flex-1" />
                    <div className="flex gap-1">
                        <ButtonIcon
                            icon={XIcon}
                            variant="secondary"
                            onClick={handleExitEditTask}
                        />
                        <ButtonIcon icon={CheckIcon} variant="primary" />
                    </div>
                </>
            )}

        </Card>
    )
}