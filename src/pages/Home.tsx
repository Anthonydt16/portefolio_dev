
import Bandeau from "../components/bandeau.tsx";
import Technologie from "../components/technologie.tsx";
import Project from "../components/project.tsx";
import Menu from "../components/menu.tsx";
const Home = () => {
    return (
        <div>
            <Menu/>
            <Bandeau/>
            <Technologie/>
            <Project/>
        </div>
    );
};

export default Home;
