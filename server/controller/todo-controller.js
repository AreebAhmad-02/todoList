
import Todo from '../model/todo.js'

export const addTodo = async (request,response) => {
    try {
        console.log("in the creating todo");
        const NewTodo = await Todo.create({
            data: request.body.data,
            createdOn: Date.now(),
            
        })

        await NewTodo.save();

       return response.status(200).json(NewTodo);
    }
    catch(error) {
        response.status(500).json({error:error.message})
    }
}
export const getAlltodos = async (request, response) => {

    try {
        
        const todos = await Todo.find({}).sort({'createdOn':-1})


       return response.status(200).json(todos);
    }
    catch(error) {
        response.status(500).json({error:error.message})
    }
}