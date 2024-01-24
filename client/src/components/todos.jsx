import { useEffect } from "react";
import { getAlltodos } from "../redux/actions";
import { useDispatch } from "react-redux";
export const Todos = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch()

    },{})
    return (
        <div> hello from Todos </div>
    )
}

export default Todos;