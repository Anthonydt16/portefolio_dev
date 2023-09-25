import Card_projet from "./card_projet.tsx";
import fond_hacked from '../assets/fond_Hacked.jpg';
import fond_Hallwod from '../assets/45.png';
const Project = () => {
    const project1 = {
        titre: "VelMap",
        description: "Le principe est simple a nous fournies une API avec des données sur les vélos et les stations, avec les contrats des villes partenaires. On devait par la suite les afficher sur une carte.",
        techno: "ReactJS, Sass, Leaflet, API, Github",
        lien: ['https://anthonydt16.github.io/VelMap.github.io/',
            'https://github.com/Anthonydt16/VelMap.github.io'
        ]
    }

    const hallowod = {
        titre: "Hallowod",
        description: "Hallowod est une application web qui est dédier à ajouter ces séances de sport pour pouvoir les suivres plus facilement et avec la fonctionalité phare qui est de pouvoir ajouter un document word pour ajouter c'est séance plus facilement.",
        techno: "ReactJS, Sass, Leaflet, API, Github",
        lien: ['https://anthonydt16.github.io/VelMap.github.io/',
            '']
    }

    return (
        <div className={"project"} id='projects'>
            <h2>Les projets</h2>
            <div className="project-list">
                <Card_projet fond={fond_hacked} titre={project1.titre} description={project1.description} techno={project1.techno} lien={project1.lien}/>
                <Card_projet fond={fond_Hallwod} titre={hallowod.titre} description={hallowod.description} techno={hallowod.techno} lien={hallowod.lien}/>
            </div>
        </div>
    );
};

export default Project;
