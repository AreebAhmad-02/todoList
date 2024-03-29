import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO } from './type';
const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) =>async(dispatch) => {

    try {
        const res = await axios.post(`${API_URL}/todos`, { data })
        dispatch({type:ADDNEW_TODO, payload:res.data})
    } catch (error) {
        console.log('ERRROR WHILE CALLING ADD NEWTODO API', error.message);
        
        
    }
}

export const getAlltodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({type:GETALL_TODO, payload:res.data})
        
        
    } catch (error) {
        console.log('Error while calling get todos api', error.message)
        
    }
}
