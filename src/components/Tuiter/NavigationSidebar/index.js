import React from "react";

const NavigationSidebar = ({ active = 'explore' }
) => {
    return (
        <>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action  "><i className="fab fa-twitter"></i></a>

                <a href="../HomeScreen/home.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'home' ? 'active' : ''}`}><i
                    className="fas fa-house "></i> <span className="d-flex d-none d-xl-block ms-1"> Home</span></a>

                <a href="../ExploreScreen/explore.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'explore' ? 'active' : ''}`}><i
                    className="fa-solid fa-hashtag"></i>
                    <span className="d-flex d-none d-xl-block ms-1">Explore</span></a>

                <a href="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'notifications' ? 'active' : ''}`}><i
                    className="fa-solid fa-bell"></i> <span className="d-none d-xl-block ms-1"> Notifications</span></a>

                <a href="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'messages' ? 'active' : ''}`}><i
                    className="fa-solid fa-envelope"></i> <span className="d-none d-xl-block ms-1">Messages</span></a>

                <a href="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'bookmarks' ? 'active' : ''}`}><i
                    className="fa-solid fa-bookmark"></i> <span className="d-none d-xl-block ms-1">Bookmarks</span></a>

                <a href="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'lists' ? 'active' : ''}`}><i
                    className="fa-solid fa-list"></i> <span className="d-none d-xl-block ms-1">Lists</span></a>

                <a href="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'profile' ? 'active' : ''}`}><i
                    className="fa-solid fa-user"></i> <span className="d-none d-xl-block ms-1">Profile</span></a>

                <a href="#" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'more' ? 'active' : ''}`}><i
                    className="fa-solid fa-ellipsis"></i><span className="d-none d-xl-block ms-1  "> More</span></a>
            </div>

            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block rounded-pill">
                    Tweet</a
                >
            </div>
        </>
    );
};
export default NavigationSidebar;
