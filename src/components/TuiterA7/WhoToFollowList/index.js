import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    return (
        <>
            <ul className="list-group">           
                <a href="/#" className="list-group-item wd-list-group "><strong>Who to follow</strong></a>
                {who.map(w => {
                    return (

                        <div key={w.id} >
                            <WhoToFollowListItem  who={w} />
                        </div>
                        /* tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit} /> */
                    );
                })
                }
            </ul>
        </>
    );
};

export default WhoToFollowList;