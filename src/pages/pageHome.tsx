import Container from "../components/container";
import TaskList from "../coreComponents/taskList";
import TasksSummary from "../coreComponents/tasksSummary";

export default function PageHome({ }) {
    return (
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSummary />
            </header>

            <TaskList />
        </Container>
    )
}