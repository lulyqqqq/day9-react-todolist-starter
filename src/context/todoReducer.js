import {ADD_TODO, FIN_TODO, REMOVE_TODO} from "./toAction";


export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: Date.now(), text: action.payload, done: false}];
        case FIN_TODO:
            return state.map((todo) =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo);
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};