import whoReducer from "./reducers/whoReducer";
import tuitsReducer from "./reducers/tuitsReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import NavigationSidebar from "./NavigationSidebar";
import './explore.css';
import WhoToFollowList from "./WhoToFollowList";
import HomeScreen from "./HomeScreen";

const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer})
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar /> </div>
                <div className="col-10 col-lg-7 col-xl-6"> 
                <HomeScreen/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                    </div>
            </div>
        </Provider>);
};
export default Tuiter;

