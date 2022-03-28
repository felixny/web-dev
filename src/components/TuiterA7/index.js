import whoReducer from "./reducers/whoReducer";
import tuitsReducer from "./reducers/tuitsReducer";
import profileReducers from "./reducers/profileReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import './explore.css';
import { Outlet } from "react-router-dom";
import WhoToFollowList from "./WhoToFollowList"
import NavigationSidebar from "./NavigationSidebar";

const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer, profile: profileReducers })
const store = createStore(reducer);


const TuiterA7 = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active = ""/> </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet />
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
};
export default TuiterA7;

