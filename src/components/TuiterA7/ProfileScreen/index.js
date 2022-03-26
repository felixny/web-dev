import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import TuitList from "../TuitList";
import ProfileComponent from "./ProfileComponent";
import WhoToFollowList from "../WhoToFollowList"
import "./profile.css";

const ProfileScreen= () =>  {
    return (
        <div className="row mt-2 mb-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <ProfileComponent/>
                <TuitList/>
            </div>
            <div className="d-none d-lg-block col-4 col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ProfileScreen;