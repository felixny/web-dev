import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components//HelloWorld";
import Labs6 from "./components/Labs/A6";
import Labs7 from "./components/Labs/A7";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
/* import ExploreScreen from './components/Tuiter/ExploreScreen/ExploreScreen';
import HomeScreen from './components/Tuiter/HomeScreen/HomeScreen'; */
import ExploreScreen from './components/TuiterA7/ExploreScreen/ExploreScreen';
import HomeScreen from './components/TuiterA7/HomeScreen';
import Tuiter from './components/TuiterA7';

function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="hello" exact={true} element={<HelloWorld />} />
            <Route path="labs/A6" exact={true} element={<Labs6 />} />
            <Route path="labs/A7" exact={true} element={<Labs7 />} />
            <Route path="tuiterA7/home" exact={true} element={<Tuiter />} />
            <Route path="tuiterA7/explore" exact={true} element={<ExploreScreen />} />
          </Route>
        </Routes>
        <Link to="/labs/A6">
          | Assignment 6 Labs |
        </Link>
        <Link to="/labs/A7">
          Assignment 7 Labs |
        </Link>
        {/* <Link to="/tuiter/home">
          Tuiter |
        </Link> */}
        <Link to="/tuiterA7/home">
          TuiterA7 |
        </Link>

      </div>
    </BrowserRouter>
  );
}


export default App;