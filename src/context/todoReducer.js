import {ADD_TODO, FIN_TODO, INIT, REMOVE_TODO, UPDATE_TODO} from "./toAction";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case FIN_TODO:
            return state.map((todo) =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo);
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case UPDATE_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo);
        case INIT:
            return action.payload;
        default:
            return state;
    }
};