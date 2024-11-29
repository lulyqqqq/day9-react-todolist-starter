import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {useContext, useEffect} from "react";
import {getTodos} from "../api/todo";
import {TodoContext} from "../App";
import {INIT} from "../context/toAction";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext)
    useEffect(() => {
        getTodos().then((todos) => {
            dispatch({type: INIT, payload: todos})
        })
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList