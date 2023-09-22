import ppProfile from "../assets/pp.png";
const Bandeau = () => {
    return (
        <div className={"bandeau"} id={"home"}>
            <h1>
                Hey 👋, Mon nom est  <span className={'envaleur'}> Anthony Douat</span> Je suis développeur web
            </h1>
            <img src={ppProfile} className={'profile'} alt={'photo de moi bg XD'}/>
        </div>
    );
};

export default Bandeau;
