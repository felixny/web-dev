const PostSummaryItem = ({ posts }) => {

  if (posts.topic == '') {
    var topic = ('')
  } else {
    var topic = (<mark className="wd-gray">{posts.topic}</mark>)
  }

  return (
    <>
      <div className="row wd-list-group-post ">
        <a href="#" className="list-group-item  list-group-item-action d-flex justify-content-between ">
          <div className="flex-column wd-topic">
            {topic}
            <p><strong>{posts.userName}</strong> <i className="fa-solid fa-circle-check"></i> <mark className="wd-gray "> - {posts.time}</mark>
            </p>
            <p className="wd-p-mid-col"><strong>{posts.title}</strong></p>

          </div>
          <div className="image-parent ">
            <img src={posts.image} className="wd-img-icon" />
          </div>
        </a>
      </div>
    </>
  );
}
export default PostSummaryItem;