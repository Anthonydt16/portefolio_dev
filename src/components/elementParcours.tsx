import {BiSolidBusiness} from "react-icons/bi";
import {BiCurrentLocation} from "react-icons/bi";
import {MdDateRange} from "react-icons/md";
// @ts-ignore
const ElementParcours = ({title, type, organisation, lieux, periode}) => {
    return (
        <div className={"element-parcours"}>
            <div className={"title"}>
                <h3>{title}</h3>
                <div className="type">{type}</div>
            </div>
            <div className={"info"}>
                <div className={"location"}>
                    <span className="entreprise"><BiSolidBusiness/> {organisation}</span>
                    <span className="lieux"><BiCurrentLocation/> {lieux}</span>
                </div>
                <div>
                    <span className="date"> <MdDateRange/>{periode}</span>
                </div>
            </div>
            <div className={"ligne-demarcation"}/>
        </div>
    );
};

export default ElementParcours;