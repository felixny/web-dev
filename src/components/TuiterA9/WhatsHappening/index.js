import React, { useState } from "react";
import './index.css';
import elon from "../Images/elon_p.jpeg";
import { useDispatch } from "react-redux";
import { createTuit } from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    /* let [whatsHappening, setWhatsHappening] = useState(''); */
    const dispatch = useDispatch();

    const [newTuit, setNewTuit] =
        useState({ tuit: 'New tuit' });

    var image = elon;

    return (<>
        <table className="wd-margin-bot">
            <tbody>
                <tr>
                    <td className="wd-vertical-top">
                        <img src={image} alt="avatar"
                            className="rounded-circle wd-img-avatar"
                        />
                    </td>
                    <td className="wd-td-style">
                        <textarea
                            onChange={(e) =>
                                setNewTuit({
                                    ...newTuit,
                                    tuit: e.target.value
                                })}
                            className="form-control-home" placeholder="What's happening?"></textarea>
                        <hr />
                        <span>
                            <a href="/#"><i className="far fa-image me-3"></i></a>
                            <a href="/#"><i className="fa-solid fa-chart-line me-3"></i></a>
                            <a href="/#"><i className="far fa-smile me-3"></i></a>
                            <a href="/#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={() =>
                            createTuit(dispatch, newTuit)} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>);
}
export default WhatsHappening;