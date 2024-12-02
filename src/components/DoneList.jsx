import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const DoneList = () => {
    const {state} = useContext(TodoContext)
    const doneList = state.filter((todo) => todo.done);

    return (
        <div>
            {
                doneList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })
            }
        </div>
    )
}
export default DoneList