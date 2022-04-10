import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitListItem from './TuitListItem';
import {findAllTuits } from "../../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() => {
        findAllTuits(dispatch);
    },[dispatch]);

    return (
        <ul className="list-group">
            {
                tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit} />
                )
            }
        </ul>
    );
}

export default TuitList;