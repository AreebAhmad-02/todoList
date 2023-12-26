

import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

    }
    
    const onInputChage = (e) => {
        setText(e.target.value);
    }
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter new Todo..."
                className="input"
            onChange={onInputChage}/>
        </form>
    )
}

export default TodoForm;