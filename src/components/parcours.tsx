import ElementParcours from "./elementParcours.tsx";


const Parcours = () => {
    return (
        <div className={"parcours"} >
            <h2>Sur moi</h2>
            <p>
                Je suis un jeune développeur web, depuis un moment j’ai révé de faire ce job et maintenant je l’es réalisé.
                J’aime réalisé differents projets sur mon temps libre du projet web à du machine learning je suis curieux et j’adore apprendre plein de trucs dans tous les sens.
            </p>
            <h2 id='experience'>Expérience</h2>
            <ElementParcours title={"Développeur web fullStack"} type={"Salariée"} organisation={"CGI Formation"} lieux={"Bordeaux"} periode={"2023 en poste actuellement"} />
            <ElementParcours title={"Développeur web fullStack"} type={"Alternance"} organisation={"PROBTP"} lieux={"Bordeaux"} periode={"2022-2023"} />
            <ElementParcours title={"Tech Lead"} type={"Stage"} organisation={"StartUp MyKlinika"} lieux={"Bordeaux"} periode={"2022"} />
            <ElementParcours title={"Développeur web fullStack"} type={"Stage"} organisation={"KaliWeb"} lieux={"Arcachon"} periode={"2021"} />
            <ElementParcours title={"Développeur web fullStack"} type={"Stage"} organisation={"HexaSolution3D"} lieux={"jarnac"} periode={"2020"} />
            <h2 id="formation">Formation</h2>
            <ElementParcours title={"Licence pro DAWIN développement WEB et Innovation Numérique"} type={"Formation"} organisation={"IUT de Bordeaux"} lieux={"Bordeaux"} periode={"2022-2023"} />
            <ElementParcours title={"BTS SIO option SLAM (Solutions Logicielles et Applications Métiers)"} type={"Formation"} organisation={"Lycée Gustave Eiffel"} lieux={"Bordeaux"} periode={"2020-2022"} />
            <ElementParcours title={"BAC PRO Système Numérique option RISC (Réseau Informatique et Système Communicant)"} type={"Formation"} organisation={"Lycée Charle Augustin Colomb"} lieux={"Angoulême"} periode={"2017-2020"} />
        </div>
    );
};

export default Parcours;