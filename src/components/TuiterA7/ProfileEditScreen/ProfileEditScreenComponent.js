import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ProfileScreen/profile.css"
import "./profileEdit.css"
import { Link } from "react-router-dom";
import elon from "../Images/005.gif";
import spacex from "../Images/webdev.png";

const ProfileEditScreenComponent = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.name);
    const [handle, setHandle] = useState(profile.handle);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);

    const saveProfile = () => {
        dispatch({
            type: 'profile-edit',
            newName: name,
            newHandle: handle,
            newBio: bio,
            newLocation: location,
            newWebsite: website,
            newdateOfBirth: dateOfBirth
        });
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col-1 ">
                    <Link to="/tuiter/profile">
                        <i className="fas fa-times wd-title-color" />
                    </Link>
                </div>
                <div className="col-9">
                    <span className="fw-bolder wd-title-color">Edit Profile</span>
                </div>
                <div className="col-2">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-light rounded-pill " onClick={saveProfile}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-3">
                <img src={spacex} width="100%" alt="banner" />
                <img src={elon} className="wd-profileImage wd-content-position" alt="profile" />
            </div>

            <div className="wd-inputBox p-2 mb-2">
                <span className="wd-box">Name</span>
                <br />
                <textarea className="wd-input-textarea w-100"
                    onChange={(event => setName(event.target.value))} value={name} />
            </div>

            <div className="wd-inputBox p-2 mb-2">
                <span className="wd-box">Handle</span>
                <br />
                <textarea className="wd-input-textarea w-100"
                    onChange={(event => setHandle(event.target.value))} value={handle} />
            </div>

            <div className="wd-inputBox p-2 mb-2">
                <span className="wd-box">Bio</span><br />
                <textarea className="wd-input-textarea w-100"
                    onChange={(event => setBio(event.target.value))} value={bio} />
            </div>
            <div className="wd-inputBox p-2 mb-2">
                <span className="wd-box">Location</span>
                <br />
                <textarea className="wd-input-textarea w-100"
                    onChange={(event => setLocation(event.target.value))} value={location} />
            </div>
            <div className="wd-inputBox p-2 mb-2">
                <span className="wd-box">Website</span>
                <br />
                <textarea className="wd-input-textarea w-100"
                    onChange={(event => setWebsite(event.target.value))} value={website} />
            </div>
            <div className="wd-inputBox p-2 mb-2">
                <span className="wd-box">Birth Date</span>
                <br />
                <input className="w-100" type="date" data-date-format="MMMM DD YYYY" onChange={(event => setDOB(event.target.value))}
                    value={dateOfBirth} />
            </div>
        </>
    )

}

export default ProfileEditScreenComponent;