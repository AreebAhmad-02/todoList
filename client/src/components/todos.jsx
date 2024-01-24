import { useEffect } from "react";
import { getAlltodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

// importing component
import { Todo } from "./Todo.jsx";

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    useEffect(() => {
        dispatch(getAlltodos());
    }, [])
    return (
        
        <article>
            <ul>
                {   
                    todos[0].map((todo) => (
                        <Todo
                            key = {todo._id}
                            todo = {todo.data}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;