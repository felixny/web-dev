const PostItem = (posts) => {
    var innerHtmlLink = ''
    if (`${posts.link}` != '') {
        innerHtmlLink = `
        <li class="list-group-item wd-lightgray">
        <span class=""> ${posts.desc1}</span><br/>
        <span class="wd-gray ">${posts.desc2}</span>
        <br/>
        <div class="wd-gray"><i class="fas fa-link"></i>
        <a href="https://${posts.link}" class="wd-gray">${posts.link}</a></div>
        </li>`
    }

    var title = ''
    if (`${posts.title}`.includes("#B")) {
        title = `${posts.title}`
        title = title.replace("#B", `<a href="https://${posts.link}">`);
        title = title.replace("#B!", `</a>`);
     
    }

    var pic = ''
    if ((`${posts.image}`).includes("nypost")) {
        pic = `<img src=${posts.image} class="wd-inner wd-img-round-ny"/>`
    } else {
        pic = `<img src=${posts.image} class="wd-inner wd-img-round"/>`
    }

    return (`
    <li class="list-group-item">
    <div class="row wd-nopadding">
            <div class="col-1 wd-nopadding"><img src=${posts.userImage} class="wd-dp " /></div>
            <div class="col-11  ">
            ${posts.userName} <i class="fa fa-check-circle"></i>
            <div class="wd-gray">@${posts.handle} <span>&nbsp;&#183;&nbsp;</span> ${posts.time}</div>
            <div class="wd-title-break pb-2">${title}</div>
            <ul class="list-group">
                <li class="list-group-item wd-inner">
                    ${pic}
                </li>
                ${innerHtmlLink}
                <li class="wd-nostyle wd-gray">
                    <i class="far fa-comment wd-first-icon"></i>${posts.comments}
                    <i class="fas fa-retweet wd-icon"></i>${posts.retweets}
                    <i class="far fa-heart wd-icon"></i>${posts.likes}
                    <i class="fas fa-upload wd-icon"></i>
                </li>
            </ul>
            </div>
    </div>   
    </li>
    `);
}
export default PostItem;