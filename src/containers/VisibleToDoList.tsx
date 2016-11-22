import {connect} from "react-redux";
import TodoList from "../components/TodoList";
import {toggleTodo} from "../actions";
import {Todo, AppState, FilterState} from "../state";
import * as React from "react";


const getVisibleTodos = (props: AppState) : Todo[] => {
    const {todos, visibilityFilter} = props;
    switch(visibilityFilter) {
        case FilterState.showAll:
            return todos;
        case FilterState.showCompleted:
            return todos.filter(t => t.completed);
        case FilterState.showActive:
            return todos.filter(t => !t.completed);
    }
}

const mapStateToProps = (state: AppState) : any => {
    return {
        todos: getVisibleTodos(state) 
    }; 
}


const mapDispatchToProps = (dispatchFn) : any => {
    return {
        onTodoClick: (id) => {
            dispatchFn(toggleTodo(id));
        }
    }
}

const VisibileTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibileTodoList;