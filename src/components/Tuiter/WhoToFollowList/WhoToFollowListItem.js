const WhoToFollowList = ({ who }) => {

  if (who.id === '1') {
    var bordertop = <span className="wd-list-border-top"></span>
    var borderbot = <span className="wd-list-border-bottom"></span>
  } else if (who.id === '2') {
    bordertop = <span className=" wd-list-border-top"></span>
    borderbot = <span className="wd-list-border-bottom"></span>
  } else if (who.id === '3') {
    bordertop = <span className="wd-list-border-top"></span>
    borderbot = <span className="wd-list-border-bottom"></span>
  } else if (who.id === '4') {
    bordertop = <span className="wd-list-border-top"></span>
    borderbot = <span className="wd-list-border-bottom"></span>
  } else {
    bordertop = <span className="wd-list-border-top"></span>
  }

  return (<>
    < ul className="list-group ">
      {bordertop}
      <a href="/#" className="list-group-item d-flex bd-highlight align-items-center" >

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
      {borderbot}
    </ul>
  </>
  );
}
export default WhoToFollowList;