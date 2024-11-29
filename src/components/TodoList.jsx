import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import React, {useContext, useEffect, useState} from "react";
import {getTodos} from "../api/todo";
import {TodoContext} from "../App";
import {INIT} from "../context/toAction";
import {Alert, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getTodos().then((todos) => {
            dispatch({type: INIT, payload: todos})
            setIsLoading(false)
        })
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {isLoading ? (
                <Spin
                    indicator={
                        <LoadingOutlined
                            style={{
                                fontSize: 48,
                            }}
                            spin
                        />
                    }
                />
            ) : (
                <>
                    <TodoGenerator/>
                    <TodoGroup/>
                </>
            )}
        </div>
    );
}

export default TodoList