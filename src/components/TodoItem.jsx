import "./TodoItem.css"
import {useContext} from "react";
import {TodoContext} from "../App";
import {FIN_TODO, REMOVE_TODO} from "../context/toAction";
import {deleteTodo} from "../api/todo";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)

    const handleDone = () => {
        dispatch({type: FIN_TODO, payload: todo.id});
    }

    const handleRemove = async () => {
        deleteTodo(todo.id).then(() => {
         dispatch({type: REMOVE_TODO, payload: todo.id});
        })
    }

    return (
        <div className={"todo-wrapper"}>
            <span className={!todo.done ? "todo-span" : "todo-span-done"} onClick={handleDone}>
                {todo.text}
            </span>
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default TodoItem;