import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components//HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ExploreScreen from './components/Tuiter/ExploreScreen/ExploreScreen';
import HomeScreen from './components/Tuiter/HomeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" exact={true} element={<HelloWorld />} />
          {/*  <Route path="/" exact={true} element={<Labs />} /> */}
          <Route path="/labs" exact={true} element={<Labs />} />
          <Route path="/tuiter" exact={true} element={<Tuiter />} />
          <Route path="/tuiter/home" exact={true} element={<HomeScreen />} />
          <Route path="/tuiter/explore" exact={true} element={<ExploreScreen />} />


        </Routes>
        <Link to="/labs">
          | Assignment 6 Labs |
        </Link>
        <Link to="/tuiter/home">
          Tuiter |
        </Link>

      </div>
    </BrowserRouter>
  );
}


export default App;