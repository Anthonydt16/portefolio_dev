import Card_projet from "./card_projet.tsx";
import fond_hacked from "../assets/fond_Hacked.jpg";
import fond_Hallwod from "../assets/45.png";
const Project = () => {
  const project1 = {
    titre: "VelMap",
    description:
      "Le principe est simple : nous avons reçu une API contenant des données sur les vélos et les stations, ainsi que les accords des villes partenaires. Notre mission consistait ensuite à les afficher sur une carte.",
    techno: "ReactJS, Sass, Leaflet, API, Github",
    lien: [
      "https://anthonydt16.github.io/VelMap.github.io/",
      "https://github.com/Anthonydt16/VelMap.github.io",
    ],
  };

  const hallowod = {
    titre: "Hallowod",
    description:
      "Hallowod est une application web dédiée à la gestion simplifiée des séances de sport, offrant une fonctionnalité phare permettant d'ajouter des documents Word pour faciliter l'enregistrement de ces séances.",
    techno: "ReactJS, Sass, Leaflet, API, Github",
    lien: [
      "https://github.com/Anthonydt16/front_hallowod_vueJS",
      "https://github.com/Anthonydt16/front_hallowod_vueJS",
    ],
  };

  const portefolio = {
    titre: "Portefolio",
    description:
      "Ce projet constitue mon portfolio, offrant une vitrine pour démontrer mes compétences et présenter mes réalisations.",
    techno: "ReactJS, Sass, Typescript",
    lien: [
      "https://anthonydt16.github.io/VelMap.github.io/",
      "https://anthonydt16.github.io/VelMap.github.io/",
    ],
  };

  const reactMovie = {
    titre: "React-Movie",
    description:
      "Nous avons reçu une API de films, que nous avons ensuite utilisée pour développer une application web avec ReactJS. Cette application nous permet d'afficher les films, de gérer les favoris et de faciliter les recherches.",
    techno: "ReactJS, Sass, Axios, API, Github",
    lien: [
      "https://github.com/Anthonydt16/react-movie",
      "https://github.com/Anthonydt16/react-movie",
    ],
  };

  return (
    <div className={"project"} id="projects">
      <h2>Les projets</h2>
      <div className="project-list">
        <Card_projet
          fond={fond_hacked}
          titre={project1.titre}
          description={project1.description}
          techno={project1.techno}
          lien={project1.lien}
        />
        <Card_projet
          fond={fond_Hallwod}
          titre={hallowod.titre}
          description={hallowod.description}
          techno={hallowod.techno}
          lien={hallowod.lien}
        />
        <Card_projet
          fond={
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          }
          titre={portefolio.titre}
          description={portefolio.description}
          techno={portefolio.techno}
          lien={portefolio.lien}
        />
        <Card_projet
          fond={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ38zwkfK6QKa7EgT_BhQkbePcRyIUt3I6JkOd58BeGNeWTU3TH5g6240D8vadCM-mwlQ&usqp=CAU"
          }
          titre={reactMovie.titre}
          description={reactMovie.description}
          techno={reactMovie.techno}
          lien={reactMovie.lien}
        />
      </div>
    </div>
  );
};

export default Project;
