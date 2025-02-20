import { Outlet, Link } from "react-router";
import '../styles/NavBar.css';

const MainLayout = () => (
    <div>
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/clock">Clock</Link>
            <Link to="/stopwatch">Stopwatch</Link>
        </nav>
        <Outlet/>
    </div>
)

export default MainLayout