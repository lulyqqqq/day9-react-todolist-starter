import "./TodoItem.css"
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {FIN_TODO, REMOVE_TODO, UPDATE_TODO} from "../context/toAction";
import {deleteTodo, updateTodo} from "../api/todo";
import {CloseCircleOutlined, EditOutlined} from "@ant-design/icons";
import {Button, Input, Modal} from "antd";

const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newText, setNewText] = useState(todo.text);


    const handleDone = async () => {

        await updateTodo(todo.id, {...todo, done: !todo.done}).then(() => {
            dispatch({type: FIN_TODO, payload: todo.id});
        })
    }

    const handleRemove = async () => {
        await deleteTodo(todo.id).then(() => {
            dispatch({type: REMOVE_TODO, payload: todo.id});
        })
    }

    const handleModify = () => {
        setNewText(todo.text);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = async () => {
        if (newText.trim()) {
            await updateTodo(todo.id, {...todo, text: newText}).then(() => {
                dispatch({type: UPDATE_TODO, payload: {id: todo.id, text: newText}});
            });
            setIsModalVisible(false);
        }
    };

    return (
        <div className={"todo-wrapper"}>
            <span className={!todo.done ? "todo-span" : "todo-span-done"} onClick={handleDone}>
                {todo.text}
            </span>
            <Button type="primary" onClick={handleModify}>
                <EditOutlined/>
            </Button>
            <Button type="primary" danger onClick={handleRemove}>
                <CloseCircleOutlined/>
            </Button>
            <Modal
                title="Edit Todo"
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleSave}
                okText="Save"
                cancelText="Cancel"
            >
                <Input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    maxLength={100}
                />
            </Modal>
        </div>
    )
}

export default TodoItem;