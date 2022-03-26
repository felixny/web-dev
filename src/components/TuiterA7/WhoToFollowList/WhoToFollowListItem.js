import React from "react";
import Java from '../Images/java.jpg';
import space from '../Images/relativity.jpg';
import virgin from '../Images/virgin.jpg';
import nasa from '../Images/nasa.png';
import tesla from '../Images/tesla.png';


const WhoToFollowListItem = ({ who }) => {
    var image = "";

    if (who.id === '1') {
        var bordertop = <span className="wd-list-border-top"></span>
        var borderbot = <span className="wd-list-border-bottom"></span>
        image = Java;
    } else if (who.id === '2') {
        bordertop = <span className=" wd-list-border-top"></span>
        borderbot = <span className="wd-list-border-bottom"></span>
        image = space;
    } else if (who.id === '3') {
        bordertop = <span className="wd-list-border-top"></span>
        borderbot = <span className="wd-list-border-bottom"></span>
        image = virgin;
    } else if (who.id === '4') {
        bordertop = <span className="wd-list-border-top"></span>
        borderbot = <span className="wd-list-border-bottom"></span>
        image = nasa;
    } else {
        bordertop = <span className="wd-list-border-top"></span>
        image = tesla;
    }

    return (<>
        < ul className="list-group ">
            {bordertop}
            <a href="/#" className="list-group-item d-flex bd-highlight align-items-center" >

                <div className="p-0 bd-highlight">
                    <img src={image} className="rounded-circle" width="50" alt="icon" />
                </div>
                <div className="p-0 bd-highlight ms-3 ">
                    <span className="wd-icon-lg">
                        <p className="wd-icon-text"><strong>{who.userName}</strong> <i className="fa-solid fa-circle-check"></i></p>
                        <p>
                            @{who.handle}
                        </p>
                    </span>
                </div>
                <div className="ms-auto p-0 bd-highlight "><button className="btn btn-primary btn-rounded ">Follow</button></div>

            </a>
            {borderbot}
        </ul>
    </>
    );
}
export default WhoToFollowListItem;