const WhoToFollowList = ({who}) => {
  return (<>

    <a href="#" className="list-group-item  d-flex bd-highlight align-items-center wd-list-group-item ">

      <div className="p-0 bd-highlight">
        <img src={who.avatarIcon} className="rounded-circle" width="50" />
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