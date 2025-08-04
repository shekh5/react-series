//after making store this one is the next step in which we create reducers
// What is Slice? =>almost , the greater version of reducer. then, what is reducer? => functionality
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello world!"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {id:nanoid(), text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateToDo:(state,action)=>{
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const {addTodo,removeTodo,updateToDo} = todoSlice.actions

export default todoSlice.reducer