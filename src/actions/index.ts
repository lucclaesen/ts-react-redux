import {Action} from "redux";



interface TodoActionPayLoad {
    id: number;
    text: string;
    completed: boolean;
}

export interface IAction <P> extends Action {
    payLoad: P;
}


export interface TodoAction extends IAction<TodoActionPayLoad> {
    
}

export interface VisibilityFilterAction extends IAction<string> {}

export const actionTypes = {
    addTodo: "ADD_TODO",
    setVisibilityFilter: "SET_VISIBILITY_FILTER",
    toggleTodo: "TOGGLE_TODO"
}


let nextTodoId = 0;

export const addTodo = (text: string) : IAction<TodoActionPayLoad> => {
    return {
        type: actionTypes.addTodo,
        payLoad: {
            id: nextTodoId++,
            text: text,
            completed: false
        }
    };
}

export const setVisibilityFilter = (filter: string) : IAction<string> => {
    return {
        type: actionTypes.setVisibilityFilter,
        payLoad: filter
    };
}

export const toggleTodo = (id: number) : IAction<TodoActionPayLoad> => {
    return {
        type: actionTypes.toggleTodo,
        payLoad: {
            id: id,
            text: "",
            completed: false
        }
    };
}
