import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = 'explore' }
) => {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action  "><i className="fab fa-twitter"></i></Link>

                <Link to="/tuiter/home" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'home' ? 'active' : ''}`}><i
                    className="fas fa-house "></i> <span className="d-flex d-none d-xl-block ms-1"> Home</span></Link>

                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'explore' ? 'active' : ''}`}><i
                    className="fa-solid fa-hashtag"></i>
                    <span className="d-flex d-none d-xl-block ms-1">Explore</span></Link>

                <Link id="Notificaton" to="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'notifications' ? 'active' : ''}`}><i
                    className="fa-solid fa-bell"></i> <span className="d-none d-xl-block ms-1"> Notifications</span></Link>

                <Link id="Messages" to="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'messages' ? 'active' : ''}`}><i
                    className="fa-solid fa-envelope"></i> <span className="d-none d-xl-block ms-1">Messages</span></Link>

                <Link id="Bookmarks" to="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'bookmarks' ? 'active' : ''}`}><i
                    className="fa-solid fa-bookmark"></i> <span className="d-none d-xl-block ms-1">Bookmarks</span></Link>

                <Link id="Lists" to="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'lists' ? 'active' : ''}`}><i
                    className="fa-solid fa-list"></i> <span className="d-none d-xl-block ms-1">Lists</span></Link>

                <Link id="Profile" to="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'profile' ? 'active' : ''}`}><i
                    className="fa-solid fa-user"></i> <span className="d-none d-xl-block ms-1">Profile</span></Link>

                <Link id=" More" to="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'more' ? 'active' : ''}`}><i
                    className="fa-solid fa-ellipsis"></i><span className="d-none d-xl-block ms-1  "> More</span></Link>
            </div>

            <div className="d-grid mt-2">
                <Link to="#" className="btn btn-primary btn-block rounded-pill">
                    Tweet  </Link>
            </div>
        </>
    );
};
export default NavigationSidebar;
