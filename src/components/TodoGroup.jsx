import TodoItem from "./TodoItem";
import React, {useContext, useState} from "react";
import {TodoContext} from "../App";
import {Pagination} from "antd";

const TodoGroup = () => {
    const {state: todoList} = useContext(TodoContext);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const onChange = (current, pageSize) => {
        setPage(current);
        setPageSize(pageSize);
    };

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const currentTodoList = todoList.slice(startIndex, endIndex);

    return (
        <div className="todo-list-container">
            {currentTodoList.map((todo, index) => {
                return <TodoItem key={todo.id + index} todo={todo}/>
            })}
            <Pagination
                align="center"
                onChange={onChange}
                pageSize={pageSize}
                current={page}
                total={todoList.length}
            />
        </div>
    );
};

export default TodoGroup;
