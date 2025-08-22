import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required: true,
  },
  complete:{
    type:Boolean,
    default:false,
    },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId, //to give refference of another schema or model 
    // "User" is the inside of the brackets name to the assigned to the model
    ref:"User" // User is the name of the model to be get get the refference 
  },
  subTodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subTodo"
    }
  ] // Array of Sub-Todos
}, { timestamps: true });

export const todo = mongoose.model('Todo', todoSchema);
