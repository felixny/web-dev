import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group ">           
                <a href="/#" className="list-group-item wd-list-group "><strong>Who to follow</strong></a>
                {who.map(who => {
                    return (

                        <div key={who.id}>
                            <WhoToFollowListItem who={who} />
                        </div>
                    );
                })
                }
            </ul>
        </>
    );
};

export default WhoToFollowList;