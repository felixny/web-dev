import React, { useState } from "react";
import { useDispatch } from "react-redux";
import react from "../Images/react.png";
import space from "../Images/nodejs.png";
import js from "../Images/javascript.png";
import jq from "../Images/jquery.png";
import java from "../Images/java.jpg";
import starship from "../Images/starship.jpeg";
import './tuitlist.css';
import { updateTuit, createTuit, deleteTuit} from "../../../actions/tuits-actions";


const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();

    const [newTuit, setNewTuit] =
        useState({ tuit: 'New tuit' });

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
                            <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}></i>
                            <button onClick={() =>
                                createTuit(dispatch, newTuit)}
                                className="btn btn-primary float-end">
                                Tuit
                            </button>

                            <textarea className="form-control w-75"
                                onChange={(e) =>
                                    setNewTuit({
                                        ...newTuit,
                                        tuit: e.target.value
                                    })}></textarea>
                                    
                            <span className="fw-bold">{tuit.userName}</span>
                            {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                            <span className="ms-1 text-secondary">@{tuit.handle}</span>
                            <div>
                                {tuit.tuit}
                            </div>
                            <div>
                                Likes: {tuit.likes}
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    likes: tuit.likes + 1
                                })} className="far fa-thumbs-up ms-2"></i>
                            </div>
                            <div>
                                Dislikes: {tuit.dislikes}
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    dislikes: tuit.dislikes + 1
                                })} className="far fa-thumbs-down ms-2"></i>
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
                            {/*   <TuitStats tuit={tuit} /> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TuitListItem;