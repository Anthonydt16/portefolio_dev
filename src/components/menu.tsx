import logo from "../assets/logo.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu desktop">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu-items">
        <a href="#home">Accueil</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projets</a>
        <a href="#parcours">Parcours</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-links">
        <a
          href="https://www.linkedin.com/in/anthony-douat-a2118b195/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Anthonydt16"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a href={"twitter.com"} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Menu;
