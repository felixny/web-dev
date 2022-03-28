import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components//HelloWorld";
import Labs7 from "./components/Labs/A7";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from './components/TuiterA7/HomeScreen';
import ExploreScreen from './components/TuiterA7/ExploreScreen/ExploreScreen';
import TuiterA7 from './components/TuiterA7';
import ProfileScreen from './components/TuiterA7/ProfileScreen';
import ProfileEditScreen from './components/TuiterA7/ProfileEditScreen';


function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Labs7 />} />
            <Route path="labs" exact={true} element={<Labs7 />} />
            <Route path="hello" element={<HelloWorld />} />
            <Route path="tuiter" element={<TuiterA7 />}>
              <Route index element={<HomeScreen />} />
              <Route path="explore" element={<ExploreScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="editprofile" element={<ProfileEditScreen /> } />
            </Route>
          </Route>
        </Routes>
        <Link to="/labs">
          A7 Labs |
        </Link>
        <Link to="/tuiter/">
          A7 Home |
        </Link>
        <Link to="/tuiter/explore">
          A7 Explore |
        </Link>
        <Link to="/tuiter/profile">
          A7 Profile |
        </Link>
      </div>
    </BrowserRouter>


  );
}


export default App;