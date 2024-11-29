import {createBrowserRouter} from "react-router-dom";
import TodoList from "../components/TodoList";
import NotFoundPage from "../components/NotFoundPage";

const router = createBrowserRouter([
    {
        path:'/todo-list',
        element: <TodoList/>
    },
    {
        path:"/notPage",
        element: <NotFoundPage/>
    }
])
export  default router
  
