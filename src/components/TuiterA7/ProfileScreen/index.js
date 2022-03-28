import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import TuitList from "../TuitList";
import ProfileComponent from "./ProfileComponent";
import WhoToFollowList from "../WhoToFollowList"
import "./profile.css";

const ProfileScreen = () => {
    return (
        <div >
            <ProfileComponent />
            <TuitList />
        </div>
    );
};
export default ProfileScreen;