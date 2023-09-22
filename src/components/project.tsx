import Card_projet from "./card_projet.tsx";
import fond from '../assets/Rectangle 4.png';
const Project = () => {
    return (
        <div className={"project"} id='projects'>
            <h2>Les projets</h2>
            <div className="project-list">
                <Card_projet fond={fond} titre={"Projet 1"} description={"Description du projet 1"} techno={"Techno 1, techno2 et techno3 "} lien={"<a href='#'>Lien vers le projet</a>"}/>
                <Card_projet fond={fond} titre={"Projet 1"} description={"Description du projet 1"} techno={"Techno 1, techno2 et techno3 "} lien={"<a href='#'>Lien vers le projet</a>"}/>
                <Card_projet fond={fond} titre={"Projet 1"} description={"Description du projet 1"} techno={"Techno 1, techno2 et techno3 "} lien={"<a href='#'>Lien vers le projet</a>"}/>
                <Card_projet fond={fond} titre={"Projet 1"} description={"Description du projet 1"} techno={"Techno 1, techno2 et techno3 "} lien={"<a href='#'>Lien vers le projet</a>"}/>
            </div>
        </div>
    );
};

export default Project;
