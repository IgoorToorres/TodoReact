import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/pageComponents";
import LayoutMain from "./pages/layoutMain";
import PageHome from "./pages/pageHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
