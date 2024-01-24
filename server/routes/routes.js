import express from 'express';
import { addTodo, getAlltodos } from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos', addTodo)

route.get('/todos',getAlltodos)

export default route;