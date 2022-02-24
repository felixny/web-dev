const NavigationSidebar = (active) => {
    return `
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action  "><i class="fab fa-twitter"></i></a>

    <a href="../HomeScreen/home.html" class="list-group-item list-group-item-action d-flex align-items-center ${active==='home'?'active':''}"><i
        class="fas fa-house "></i> <span class="d-flex d-none d-xl-block ms-1"> Home</span></a>

    <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action d-flex align-items-center ${active==='explore'?'active':''} "><i
        class="fa-solid fa-hashtag"></i>
      <span class="d-flex d-none d-xl-block ms-1">Explore</span></a>
    
      <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ${active==='notifications'?'active':''}"><i
        class="fa-solid fa-bell"></i> <span class="d-none d-xl-block ms-1"> Notifications</span></a>

    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ${active==='messages'?'active':''}"><i
        class="fa-solid fa-envelope"></i> <span class="d-none d-xl-block ms-1">Messages</span></a>

    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ${active==='bookmarks'?'active':''}"><i
        class="fa-solid fa-bookmark"></i> <span class="d-none d-xl-block ms-1">Bookmarks</span></a>

    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ${active==='lists'?'active':''}"><i
        class="fa-solid fa-list"></i> <span class="d-none d-xl-block ms-1">Lists</span></a>

    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ${active==='profile'?'active':''}"><i
        class="fa-solid fa-user"></i> <span class="d-none d-xl-block ms-1">Profile</span></a>

    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ${active==='more'?'active':''}"><i
        class="fa-solid fa-ellipsis"></i><span class="d-none d-xl-block ms-1  "> More</span></a>
   </div>

   <div class="d-grid mt-2">
   <a href="#" class="btn btn-primary btn-block rounded-pill">
     Tweet</a
   >
   </div>
`;
};
export default NavigationSidebar;
