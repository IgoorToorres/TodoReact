import { NavLink } from "react-router";
import Text from "../components/text";

export default function Footer() {
    return (
        <footer>
            <nav className="flex itmes center justify-center gap-3">
                <NavLink to="/">
                    <Text variant="body-md-bold" className="text-gray-300">Tarefas</Text>
                </NavLink>
                <NavLink to="/componentes">
                    <Text variant="body-md-bold" className="text-gray-300">components</Text>
                </NavLink>
            </nav>
        </footer>
    )
}