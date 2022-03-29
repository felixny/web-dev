import React from "react";
import { useDispatch } from "react-redux";
import react from "../Images/react.png";
import space from "../Images/nodejs.png";
import js from "../Images/javascript.png";
import jq from "../Images/jquery.png";
import java from "../Images/java.jpg";
import starship from "../Images/starship.jpeg";
import './tuitlist.css';
import TuitStats from "./TuitStats";


const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuit = () => {
        dispatch({ type: 'delete-tuit', tuit })
    };

    var image = "";

    if (tuit._id === "1") {
        image = react;
    } else if (tuit._id === "2") {
        image = space;
    } else if (tuit._id === "3") {
        image = js;
    } else if (tuit._id === "4") {
        image = jq;
    } else {
        image = java;
    }

    return (
        <li className="list-group-item">
            <table>
                <tbody>
                    <tr>
                        <td className="align-text-top">
                            <img className="rounded-circle wd-avatar-image"
                                src={image}
                                alt="avatar" />
                        </td>
                        <td className="ps-3 wd-style" >
                            <i onClick={deleteTuit} className="fa fa-remove fa-pull-right"></i>
                            <span className="fw-bold">{tuit.userName}</span>
                            {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                            <span className="ms-1 text-secondary">@{tuit.handle}</span>
                            <div>
                                {tuit.tuit}
                            </div>
                            {
                                tuit.attachments && tuit.attachments.image && <img src={starship}
                                    className="mt-2 wd-border-radius-20px"
                                    style={{ width: "100%" }}
                                    alt="tuit pic" />
                            }
                            {
                                tuit.attachments && tuit.attachments.video &&
                                <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{ width: "100%" }}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            }
                            <TuitStats tuit={tuit} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TuitListItem;