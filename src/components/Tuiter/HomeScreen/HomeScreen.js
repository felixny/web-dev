import React from "react";
import NavigationSidebar from "../NavigationSidebar";
/* import Posts from "../PostList/"; */
import HomeComponent from "./HomeComponent";
/* import ExploreComponent from "../ExploreScreen/ExploreComponent"; */
import PostSummaryList from "../PostSummaryList/";
import "./home.css"

const HomeScreen = () => {
    return (
        <>
            <div class="row mt-2">

                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home" />
                </div>

                <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                    <HomeComponent />
                </div>

                <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-ps-col3">
                    <PostSummaryList />

                </div>

                <div class="mt-4"></div>

            </div>
        </>
    );

};

export default HomeScreen;
