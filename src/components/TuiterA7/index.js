import whoReducer from "./reducers/whoReducer";
import tuitsReducer from "./reducers/tuitsReducer";
import profileReducers from "./reducers/profileReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import './explore.css';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { Route, Routes } from "react-router-dom";
import ProfileEditScreen from "./ProfileEditScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer, profile: profileReducers })
const store = createStore(reducer);

const TuiterA7 = () => {
    return (
        <Provider store={store}>
          {/*   <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar /> </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <ProfileScreen/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div> */}
            <div>
                <Routes>
                    <Route path="/profile" exact={true} element={<ProfileScreen/> } />
                    <Route path="/editprofile" exact={true} element={<ProfileEditScreen/> } />
                    <Route path="/home" exact={true} element={<HomeScreen/> } />
                    <Route path="/explore" exact={true} element={<ExploreScreen/> } />
                </Routes>
            </div>
         {/*    <ProfileScreen/> */}
            {/* <div>
                <Routes>
                    <Route path="/tuiterA7/explore" exact={true} element={<ExploreScreen/>} /> 
                    <Route path="/tuiterA7/profile" exact={true} element={<ProfileScreen />} />
                    <Route path="/tuiterA7/profileEdit" exact={true} element={<ProfileEditScreen />} />
                </Routes>
            </div> */}
        </Provider>
        );
};
export default TuiterA7;

