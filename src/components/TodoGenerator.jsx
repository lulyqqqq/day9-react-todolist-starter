import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {ADD_TODO, INIT} from "../context/toAction";
import "./TodoGenerator.css"
import {addTodo, getTodos} from "../api/todo";

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = async () => {
        if (text.trim()) {
            const newTodo = {
                text: text,
                done: false,
            };
            await addTodo(newTodo).then((todo) => {
                dispatch({type: ADD_TODO, payload: todo});
            });
            setText("");
        }
    }

    return (
        <div className={"todo-generator-wrapper"}>
            <input maxLength={100} value={text} onChange={handleTextChange}/>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}

export default TodoGenerator