const PostSummaryItem = (posts) => {
    return (`
    <div class="row wd-list-group-post ">
    <a href="#" class="list-group-item  list-group-item-action d-flex justify-content-between align-items-top ">
    <div class="flex-column ">
      <mark class="wd-gray ">${posts.topic}</mark>
      <p><strong>${posts.userName}</strong> <i class="fa-solid fa-circle-check"></i> <mark class="wd-gray "> - ${posts.time}</mark>
      </p>
      <p class="wd-p-mid-col"><strong>${posts.title}</strong></p>

    </div>
    <div class="image-parent ">
      <img src=${posts.image} class="wd-img-icon">
    </div>
  </a>
  </div>
    `);
}
export default PostSummaryItem;