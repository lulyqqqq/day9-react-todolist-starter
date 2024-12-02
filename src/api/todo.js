
import instance from "./Interceptor";

export const getTodos = async () => {
    const response = await instance.get("/todos")
    return response.data
}


export const deleteTodo = async (id) =>{
    const response = await instance.delete(`/todos/${id}`)
    return response.status
}

export const addTodo = async (todo) =>{
    const response = await instance.post(`/todos`,todo)
    return response.data;
}

export const updateTodo = async (id,todo) =>{
    const response = await instance.put(`/todos/${id}`,todo)
    return response.data;
}


