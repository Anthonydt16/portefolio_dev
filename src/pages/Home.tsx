import ppProfile from './../assets/pp.png'
const Home = () => {
    return (
        <div className={"bandeau"}>
            <h1>
                Hey 👋,{'\n'} Mon nom est {'\n'} <span className={'envaleur'}> Anthony Douat</span> {'\n'} Je suis développeur web
            </h1>
            <img src={ppProfile} className={'profile'} alt={'photo de moi bg XD'}/>

        </div>
    );
};

export default Home;