import React from "react";
import TuitList from "../TuitList";
import WhatsHappening from "../WhatsHappening";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";

const HomeScreen = () => {
    return (
        <div >
            <WhatsHappening/>
            <TuitList/>
        </div>
    );
}
export default HomeScreen;