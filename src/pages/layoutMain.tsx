import Header from "../coreComponents/header";
import Footer from "../coreComponents/footer";
import MainContent from "../coreComponents/mainContent";
import { Outlet } from "react-router";


export default function LayoutMain() {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
}