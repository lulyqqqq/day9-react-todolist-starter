
import instance from "./Interceptor";

export const getTodos = async () => {
    const response = await instance.get("/todo")
    return response.data
}


export const deleteTodo = async (id) =>{
    const response = await instance.delete(`/todo/${id}`)
    return response.status
}

export const addTodo = async (todo) =>{
    const response = await instance.post(`/todo`,todo)
    return response.data;
}

export const updateTodo = async (id,todo) =>{
    const response = await instance.put(`/todo/${id}`,todo)
    return response.data;
}


