import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    if (who.id === '5') {
        var borderbot = <span className="wd-list-group-item-bottom"></span>
      }
    return (
        <>
            <ul className="list-group wd-list-group-item-bottom">
                <a href="#" className="list-group-item wd-list-group "><strong>Who to follow</strong></a>
                {who.map(who => {
                    return (

                        <div key={who.id}>
                            <WhoToFollowListItem who={who} />
                        </div>
                    );

                })
                }
        {borderbot}
            </ul>

        </>

    );
};

export default WhoToFollowList;