import * as React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";


const component = ({onSubmit}) => {
    let input;

    return (
        <div>
            <h1>New Todo</h1>
            <form
                onSubmit= {e => {
                    e.preventDefault();
                    if (!input.value.trim())
                        return;
                    onSubmit(input.value);
                    input.value = "";
                }}
            >
                <input ref={node => { input = node}}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text: string) => {
            dispatch(addTodo(text));
        }
    };
}

const AddTodo = connect(null, mapDispatchToProps)(component);

export default AddTodo;