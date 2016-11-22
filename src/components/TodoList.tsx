import * as React from "react";
import TodoComponent from "./Todo";
import {Todo} from "../state";


// See https://blog.mariusschulz.com/2015/11/13/typing-destructured-object-parameters-in-typescript
// on how to use typings in destructuring parameters ...
const TodoList = ({todos, onTodoClick} : {todos: Todo[], onTodoClick: any}) => (
    <ul>
        {todos.map(t => 
                <TodoComponent 
                    key = {t.id}
                    completed= {t.completed}
                    text = {t.text}
                    onClick = {() => onTodoClick(t.id) }
                    />
            
        )}
    </ul>
)


export default TodoList;