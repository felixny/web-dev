import React, { useState } from "react";
import './index.css';
import elon from "../Images/elon_p.jpeg";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
      
    }

    var image = elon;

    return (<>
        <table style={{ marginBottom: '16px' }}>
            <tbody>
                <tr>
                    <td style={{ verticalAlign: 'top' }}>
                        <img src={image} alt="avatar"
                            className="rounded-circle wd-img-avatar"
                        />
                    </td>
                    <td style={{ width: "100%" }}>
                        <textarea value={whatsHappening}
                            onChange={(event) => setWhatsHappening(event.target.value)}
                            className="form-control-home" placeholder="What's happening?"></textarea>
                        <hr />
                        <span>
                            <a href="/#"><i className="far fa-image me-3"></i></a>
                            <a href="/#"><i className="fa-solid fa-chart-line me-3"></i></a>
                            <a href="/#"><i className="far fa-smile me-3"></i></a>
                            <a href="/#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>);
}
export default WhatsHappening;