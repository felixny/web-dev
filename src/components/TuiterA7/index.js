/* import React from "react";
import './explore.css';
import ExploreScreen from "./ExploreScreen/ExploreScreen"; */
/* import HomeScreen from "./HomeScreen/HomeScreen"; */
/* import { Link, Route } from "react-router-dom"; */

/* const Tuiter = () => {
    return (
        <>
            <NavigationSidebar active="home" />
            <WhoToFollowListItem/>
            <PostSummaryList/>
          <ExploreScreen/>

        </>
    )
};
export default Tuiter; */
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuitsReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import './explore.css';
import WhoToFollowList from "./Tuiter/WhoToFollowList";

const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer })
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div >
                <Route path="/tuiterA7/home" exact={true} element={<HomeScreen />} />
            </div>
        </Provider>
    );
};
export default Tuiter;

