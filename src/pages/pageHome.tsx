import Container from "../components/container";
import TasksSummary from "../coreComponents/tasksSummary";

export default function PageHome({ }) {
    return (
      <Container as="article" className="space-y-2">
        <header className="flex items-center justify-between">
            <TasksSummary />
        </header>
      </Container>
    )
}