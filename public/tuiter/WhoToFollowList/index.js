import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
<ul class="list-group "> <!-- continue here --> </ul>
<a href="#" class="list-group-item wd-list-group "><strong>Who to follow</strong></a>
${who.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')
        }
        </ul>

`);
}

export default WhoToFollowList;