import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.jpg";
const Footer = () => {
  const date: number = new Date().getFullYear();

  return (
    <div className={"footer"}>
      <div className="top">
        <img src={logo} alt="photo du logo" />
        <div className="right">
          <a href={"mailto:anthonydt16@gmail.com"} className="mail">
            anthonydt16@gmail.com
          </a>
          <div>
            <a
              href="https://www.linkedin.com/in/anthony-douat-6b1b3b1b9/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Anthonydt16"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-douat-6b1b3b1b9/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>© {date} Anthony Douat</span>
        <span>développeur web</span>
        <span>France</span>
      </div>
    </div>
  );
};

export default Footer;
