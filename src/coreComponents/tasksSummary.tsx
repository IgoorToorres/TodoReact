import Badge from "../components/badge";
import Text from "../components/text";


export default function TasksSummary({ }) {
    return (
        <>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary" >0</Badge>
            </div>
            <div className="flex flex-row gap-3">
                <Text variant="body-sm-bold" className="!text-gray-300">Concluidas</Text>
                <Badge>2 de 5</Badge>
            </div>
        </>
    )
}