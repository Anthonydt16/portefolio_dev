// @ts-ignore
const CardProjet = ({fond, titre, description, techno, lien}) => {
    return (
        <div className={"cardProjet"}>
            <img src={fond} alt="Illustration de l'application ou du projet"/>
            <div className="content">
                <h3>{titre}</h3>
                <p>{description}</p>
                <div className="techno">
                    <p><span>Technologie utilisé :</span> {techno}</p>
                </div>
                <div className="lien">
                    <a href={lien[0]}>Lien vers le projet</a>
                    <a href={lien[1]}>lien vers le code</a>
                </div>
            </div>
        </div>
    );
}
export default CardProjet;
