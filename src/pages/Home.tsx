
import Bandeau from "../components/bandeau.tsx";
import Technologie from "../components/technologie.tsx";
import Project from "../components/project.tsx";
import Menu from "../components/menu.tsx";
import Parcours from "../components/parcours.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";
const Home = () => {
    return (
        <div>
            <Menu/>
            <Bandeau/>
            <Technologie/>
            <Project/>
            <Parcours/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
