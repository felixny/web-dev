import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";
import React from "react";

const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group ">
                {posts.map(posts => {
                    return (
                        <div key = {posts.id}>
                        <PostSummaryItem posts={posts} />
                        </div>
                    );
                })
                }
            </ul>
        </>);
}

export default PostSummaryList;