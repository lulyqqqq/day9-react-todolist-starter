import TodoItem from "./TodoItem";
import {useContext} from "react";
import {TodoContext} from "../App";

const TodoGroup = () => {
    const {state:todoList} = useContext(TodoContext)
    return (

        <div className={"todo-list-container"}>
            {
                todoList.length === 0 ? "Add the things you need to do today...":
                todoList.map((todo,index) => {
                    return <TodoItem key={todo.id + index} todo={todo}/>
                })
            }
        </div>
    )
}

export default TodoGroup