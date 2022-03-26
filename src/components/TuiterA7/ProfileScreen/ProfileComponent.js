import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import elon from "../Images/005.gif";
import spacex from "../Images/webdev.png";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left" />
                </div>
                <div className="col-11">
                    <span className="wd-title-color">{profile.name}</span><br />
                    <span>1000 tweets</span>
                </div>
                <img src={spacex} width="100%" alt="banner" />
            </div>

            <div className="wd-content-position">
                <div>
                    <img src={elon} className="wd-profileImage" alt="prof" />
                    <Link to="/TuiterA7/editprofile">
                        <button
                            className="btn btn-light rounded-pill wd-editButton fw-bold">
                            Edit Profile
                        </button>
                    </Link><br />
                </div>
                <div className="mt-1">
                    <span className="wd-userNameHandle wd-userNameFont fw-bolder">{profile.name}</span>

                </div>
                <div >
                    <span className="wd-userNameHandle">@{profile.handle}</span>
                </div>

                <div className="ms-2">
                    <div className="mt-2">
                        <span className="wd-bio">{profile.bio}</span>
                    </div>
                    <div>
                        <i className="fas fa-map-marker-alt" />
                        <span className="ms-1"> {profile.location} </span>
                        <i className="fas fa-link ms-3" />
                        <span className="ms-1">  {profile.website} </span>
                        <i className="fas fa-calendar-alt ms-3" />
                        <span className="ms-1"> Born {profile.dateOfBirth} </span>
                        <i className="fas fa-calendar-alt ms-3" />
                        <span className="ms-1"> Joined {profile.dateJoined} </span><br />
                    </div>
                    <div>
                        <span className="wd-title-color"> {profile.followingCount} </span>
                        <span>Following</span>
                        <span className="wd-title-color ms-3"> {profile.followersCount} </span>
                        <span>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileComponent;