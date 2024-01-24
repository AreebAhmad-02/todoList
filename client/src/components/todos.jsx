import { useEffect } from "react";
import { getAlltodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    console.log(todos[0].map((todo) => (todo.data

    )))
    useEffect(() => {
        dispatch(getAlltodos());
    }, [])
    return (
        
        <article>
            <ul>
                {   
                    todos[0].map((todo) => (
                        <li>{todo.data }</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;