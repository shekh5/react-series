import { createContext,useContext } from "react";

export const Todocontext = createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        completed:false
    }],
    addTodo : ()=>{},
    deleteTodo : ()=>{},
    updateTodo : ()=>{},
    toggleComplete : ()=>{}
})

export const TodocontextProvider = Todocontext.Provider

export  const useTodo=()=>{
    return useContext(Todocontext)
}