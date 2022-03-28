import React from "react";
import TuitList from "../TuitList";
import ProfileComponent from "./ProfileComponent";
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