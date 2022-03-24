const PostItem = ({ posts }) => {
    /* var title = ('')
    if (posts.title.includes("#H")) {
        var link = ''
        link = <a href="https://${posts.link}">ins</a>
        title = (posts.title)
        title = title.replace('#H',link)
    } */

    var title = ('')
    if (posts.title.includes("#H")) {
        title = (
            <span> Amazing show about <a href="https://netflix.com">@inspiration4x</a> mission! </span>)
    } else {
        title = (
            <span>Grimes seen reading Karl Marx following split with world's richest man Elon Musk <a href="https://netflix.com">trib.ai/nx2Gfaq</a></span>
        )
    }
    /*  var title = ''
     if (`${posts.title}`.includes("#H")) {
         title = `${posts.title}`
         title = title.replace("#H", `<a href="https://${posts.link}">`);
         title = title.replace("#H!", `</a>`);
     } */


    var innerHtmlLink = ('')
    if ((posts.link) !== '') {
        innerHtmlLink = (
            <li className="list-group-item wd-lightgray">
                <span className=""> {posts.post_title}</span><br />
                <span className="wd-gray ">{posts.post}</span>
                <br />
                <div className="wd-gray"><i className="fas fa-link"></i>
                    <a href="https://{posts.link}" className="wd-gray">{posts.link}</a></div>
            </li>)
    }

    var pic = ''
    if ((posts.image).includes("woman")) {
        pic = (<li className="list-group-item wd-list-group-item wd-img-size ">
            <img src={posts.image} alt="ny pic" className="wd-inner wd-img-round-ny img-fluid " />
        </li>)
    } else {
        pic = (<li className="list-group-item wd-list-group-item-first wd-img-size ">
            <img src={posts.image} alt="space ship" className="wd-inner wd-img-round img-fluid" />
        </li>)
    }

    if (posts.id === '1') {
        var borderbot = <span className="wd-list-border-bottom"></span>
    } else {
        var bordertop = <span className="wd-list-border-top"></span>

    }

    return (
        <>
            <ul className="list-group ">
                {bordertop}
                <li className="list-group-item">
                    <div className="row wd-nopadding">
                        <div className="col-1 wd-nopadding"><img src={posts.userImage} alt="icon" className="wd-dp" /></div>
                        <div className="col-11  ">
                            {posts.userName}  <i className="fa fa-check-circle"> </i>
                            <div className="wd-gray"> @{posts.handle} <span>&nbsp;&#183;&nbsp;</span> {posts.time}</div>
                            <div className="wd-title-break pb-2">{title}</div>
                            <ul className="list-group ">
                                {pic}
                                {innerHtmlLink}
                                <li className="wd-nostyle wd-gray">
                                    <i className="far fa-comment wd-first-icon"></i>{posts.comments}
                                    <i className="fas fa-retweet wd-icon"></i>{posts.retweets}
                                    <i className="far fa-heart wd-icon"></i>{posts.likes}
                                    <i className="fas fa-upload wd-icon"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                {borderbot}
            </ul>
        </>
    );
}
export default PostItem;