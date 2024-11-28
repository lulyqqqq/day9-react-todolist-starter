import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {ADD_TODO} from "../context/toAction";
import "./TodoGenerator.css"

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({type: ADD_TODO, payload: text});
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