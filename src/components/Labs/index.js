import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles"
import TodoItem from "./ToDo/TodoItem";
import TodoList from "./ToDo/TodoList";

const Labs = () => {
    return (
        <div>
        <>
        <h1>Labs</h1>
        <Link to="/hello">
        Hello
        </Link> |
        <Link to="/tuiter">
            Tuiter
        </Link>
        </>
        <TodoList/>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        </div>
    )
};
export default Labs;