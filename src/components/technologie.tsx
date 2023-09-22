//importer les logo de react-icons
import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {
    SiExpress,
    SiGit,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNpm,
    SiPostgresql,
    SiPrisma
} from "react-icons/si";
import {BiLogoNodejs, BiLogoVuejs} from "react-icons/bi";
import {GrReactjs} from "react-icons/gr";
const Technologie = () => {

    return (
        <div className={"technologie"} id="technologies">
            <h2>Technologie</h2>
            <div className="logos">
                <AiFillHtml5 className={"icon-with-gradient"} />
                <IoLogoCss3 className={"icon-with-gradient"}/>
                <SiJavascript className={"icon-with-gradient"}/>
                <BiLogoNodejs className={"icon-with-gradient"}/>
                <GrReactjs className={"icon-with-gradient"}/>
                <BiLogoVuejs className={"icon-with-gradient"}/>
                <SiMysql className={"icon-with-gradient"}/>
                <SiPostgresql className={"icon-with-gradient"}/>
                <SiMongodb className={"icon-with-gradient"}/>
                <SiGit className={"icon-with-gradient"}/>
                <SiGithub className={"icon-with-gradient"}/>
                <SiExpress className={"icon-with-gradient"}/>
                <SiNpm className={"icon-with-gradient"}/>
                <SiPrisma className={"icon-with-gradient"}/>
            </div>
        </div>
    );
};

export default Technologie;
