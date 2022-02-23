const WhoToFollowList = (who) => {
    return (`    
   
    <a href="#" class="list-group-item  d-flex bd-highlight align-items-center wd-list-group-item ">

    <div class="p-0 bd-highlight">
    <img src=${who.avatarIcon} class="rounded-circle" width="50">
    </div>
    <div class="p-0 bd-highlight ms-3 ">
    <span class="wd-icon-lg">
      <p class="wd-icon-text"><strong>${who.userName}</strong> <i class="fa-solid fa-circle-check"></i></p>
      <p>
      @${who.handle}
      </p>
      </span>
    </div>
    <div class="ms-auto p-0 bd-highlight "><button class="btn btn-primary btn-rounded ">Follow</button></div>
  </a>
    
    `);
}
export default WhoToFollowList;