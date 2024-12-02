import TodoItem from "./TodoItem";
import React, {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {Pagination} from "antd";

const TodoGroup = () => {
    const {state: todoList} = useContext(TodoContext);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const onChange = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize);
    };

    console.log(page)
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const currentTodoList = todoList.slice(startIndex, endIndex);

    useEffect(() => {
        if (currentTodoList.length === 0 && page > 1) {
            setPage(page - 1)
        }
    }, [currentTodoList.length === 0]);

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
