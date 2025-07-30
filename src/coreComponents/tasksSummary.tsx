import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/useTasks";


export default function TasksSummary({ }) {

    const { tasksCount, concluded, loading } = useTasks();

    return (
        <>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary" loading={loading} >{tasksCount}</Badge>
            </div>
            <div className="flex flex-row gap-3">
                <Text variant="body-sm-bold" className="!text-gray-300">Concluidas</Text>
                <Badge loading={loading} >{`${concluded} de ${tasksCount}`}</Badge>
            </div>
        </>
    )
}