import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList";
import './explore.css';
import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Tuiter = () => {
    return (
        <>
            <NavigationSidebar active="home" />
            <WhoToFollowListItem/>
            <PostSummaryList/>
            
        </>
    )
};
export default Tuiter;