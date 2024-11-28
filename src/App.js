import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {todoReducer} from "./context/todoReducer";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
