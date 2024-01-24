import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
    
})

const todo = mongoose.model('todotable', todoSchema);

export default todo;