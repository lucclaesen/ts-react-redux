// No redux dependency! In fact, no dependency on any framework at all 
// (except optionally immutable)

import {Action} from "redux";
import {TodoAction, actionTypes} from "../actions";
import {Todo} from "../state";



const handleToggleTodo = (given : Todo, action: TodoAction) : Todo => {
    if (action.payLoad.id !== given.id) {
        return given;
    } 
    return Object.assign({}, given, {completed : !given.completed });
};

const handleAddTodo = (given: Todo[], action: TodoAction) : Todo[] => {
    return [...given, {
        id: action.payLoad.id,
        text: action.payLoad.text,
        completed : action.payLoad.completed
    }];
}

const todos =  (given: Todo[] = [], action: TodoAction) : Todo[] => {
    switch (action.type) {
        case actionTypes.addTodo: return handleAddTodo(given, action);
        case actionTypes.toggleTodo:
            return given.map(t => handleToggleTodo(t, action));
        default: return given;
    }
}


export default todos;