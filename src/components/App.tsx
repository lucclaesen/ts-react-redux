import * as React from "react";
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleToDoList";
import AddTodo from "../containers/AddTodo";

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
}

export default App;
