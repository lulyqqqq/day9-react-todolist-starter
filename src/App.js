import {createContext, useReducer} from "react";
import './App.css';
import {todoReducer} from "./context/todoReducer";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import TodoList from "./components/TodoList";
import NotFoundPage from "./components/NotFoundPage";
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const linkStyle = {
        textDecoration: 'none',
        color: '#000',
        fontSize: '18px',
        padding: '8px 12px',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
    };

    const linkActiveStyle = {
        color: '#fff',
        backgroundColor: '#007bff',
    };

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <BrowserRouter>
                    <nav>
                        <Link to="/todo-list" style={linkStyle} activeStyle={linkActiveStyle}>Home</Link>
                        <Link to="/todo-done-list" style={linkStyle} activeStyle={linkActiveStyle}>todoList</Link>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/todo-list"/>}></Route>
                        <Route path={"/todo-list"} element={<TodoList/>}></Route>
                        <Route path={"/todo-done-list"} element={<DoneList/>}></Route>
                        <Route path={"*"} element={<NotFoundPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
