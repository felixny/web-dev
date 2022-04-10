import '../explore.css';
import react from "../Images/react.png";
import node from "../Images/nodejs.png";
import js from "../Images/javascript.png";
import jq from "../Images/jquery.png"

const PostSummaryItem = ({ posts }) => {

  if (posts.topic === '') {
    var topic = ('')
  } else {
    topic = (<mark className="wd-gray">{posts.topic}</mark>)
  }

  var image = "";

  if (posts.id === '2') {
    var bordertop = <span className="wd-list-border-top"></span>
    var borderbot = <span className="wd-list-border-bottom"></span>
    image = js;
  } else if (posts.id === '3') {
    bordertop = <span className=" wd-list-border-top"></span>
    borderbot = <span className="wd-list-border-bottom"></span>
    image = jq;
  } else if (posts.id === '4') {
    bordertop = <span className="wd-list-border-top"></span>
    image = node;
  } else {
    borderbot = <span className="wd-list-border-bottom"></span>
    image = react;
  }

  return (

    <ul className="row list-group wd-ms-2">
      {bordertop}
      <li className="list-group-item list-group-item-action d-flex justify-content-between ">

        <div className="flex-column wd-topic">
          {topic}
          <p><strong>{posts.userName}</strong> <i className="fa-solid fa-circle-check" /> <mark className="wd-gray "> - {posts.time}</mark>
          </p>
          <p className="wd-p-mid-col"><strong>{posts.title}</strong></p>

        </div>
        <div className="image-parent ">
          <img src={image} className="wd-img-icon" alt="icon" />
        </div>
      </li>
      {borderbot}
    </ul>

  );
}
export default PostSummaryItem;