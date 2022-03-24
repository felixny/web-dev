import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index";

const ExploreScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore" />

            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <ExploreComponent />
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-ps-col3">
                <WhoToFollowList />
            </div>

            <div className="mt-4"></div>

        </div>
    );
};

export default ExploreScreen;

