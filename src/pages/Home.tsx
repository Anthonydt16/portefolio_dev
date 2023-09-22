
import Bandeau from "../components/bandeau.tsx";
import Technologie from "../components/technologie.tsx";
import Project from "../components/project.tsx";
import Menu from "../components/menu.tsx";
import Parcours from "../components/parcours.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";
import ScrollLinked from "../components/scrollLinked.tsx";
const Home = () => {
    //liste des id des sections pour le scroll

    return (
        
        <div className="contentPortefolio">
            <ScrollLinked />
            <Menu />
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
