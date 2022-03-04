const WhoToFollowList = ({ who }) => {

  if (who.id === '5') {
    var borderbot = <span className="wd-list-group-item-bottom"></span>
  }
  return (<>

    <a href="#" className="list-group-item d-flex bd-highlight align-items-center" >
  
      <div className="p-0 bd-highlight">
        <img src={who.avatarIcon} className="rounded-circle" width="50" alt="icon" />
      </div>
      <div className="p-0 bd-highlight ms-3 ">
        <span className="wd-icon-lg">
          <p className="wd-icon-text"><strong>{who.userName}</strong> <i className="fa-solid fa-circle-check"></i></p>
          <p>
            @{who.handle}
          </p>
        </span>
      </div>
      <div className="ms-auto p-0 bd-highlight "><button className="btn btn-primary btn-rounded ">Follow</button></div>

    </a>
   

  </>
  );
}
export default WhoToFollowList;