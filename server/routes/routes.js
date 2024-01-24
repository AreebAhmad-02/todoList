import express from 'express';
import { addTodo } from '../controller/todo-controller.js';
import { getAlltodos,getAlltodos } from '../../client/src/redux/actions/index.js';
const route = express.Router();

route.post('/todos', addTodo)

route.get('todos',getAlltodos)

export default route;