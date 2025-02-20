import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Clock from "./pages/Clock";
import Stopwatch from "./pages/Stopwatch";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Index/>}/>
                <Route path="clock" element={<Clock/>}/>
                <Route path="stopwatch" element={<Stopwatch/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router