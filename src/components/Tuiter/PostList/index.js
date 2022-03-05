import PostItem from "./PostItem.js";
import posts from "./posts.json";
const PostList = () => {
    return (
        <ul className="list-group">
            {posts.map(posts => {

                return (<div key={posts.id}> <PostItem posts={posts} /> </div>);
            })}
        </ul>
    );
}

export default PostList;