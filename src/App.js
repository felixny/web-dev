import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components//HelloWorld";
import Labs6 from "./components/Labs/A6";
import Labs7 from "./components/Labs/A7";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TuiterA7 from './components/TuiterA7';


function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route >
            <Route path="hello" exact={true} element={<HelloWorld />} />
            <Route path="labs/A6" exact={true} element={<Labs6 />} />
            <Route path="labs/A7" exact={true} element={<Labs7 />} />
            {/* <Route path="tuiterA7/home" exact={true} element={<Tuiter />} /> */}
            {/* <Route path="tuiterA7/explore" exact={true} element={<ExploreScreen />} /> */}
            {/* <Route path="tuiterA7/profile" exact={true} element={<Tuiter />} /> */}
            {/* <Route path="tuiterA7" element={<TuiterA7 />} /> */}
              {/* <Route index element ={<HomeScreen/>} /> */}
              {/* <Route path ="explore" element={<ExploreScreen />} />
              <Route path ="profile" element={<TuiterA7 />} />
              <Route path="editprofile" element = {<ProfileEditScreen/>}/> */}
            <Route path="/TuiterA7/*" exact={true} element={<TuiterA7/>} />
          </Route>
        </Routes>
        <Link to="/labs/A6">
          | A6 Labs |
        </Link>
        <Link to="/labs/A7">
          A7 Labs |
        </Link>
        {/* <Link to="/tuiter/home">
          Tuiter |
        </Link> */}
        <Link to="/TuiterA7/home">
          A7 Home |
        </Link>
        <Link to="/TuiterA7/explore">
          A7 Explore |
        </Link>
        <Link to="/TuiterA7/profile">
          A7 Profile |
        </Link>

      </div>
    </BrowserRouter>
    
  );
}


export default App;