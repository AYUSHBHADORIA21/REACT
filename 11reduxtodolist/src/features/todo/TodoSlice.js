import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1 , text:"Hello World"}]
}

export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    //isme ata hai property and function
    reducers:{
        //initialstate me kya kya values hai uska "state" batege 
        addTodo: (state ,action )=>{
            const todo = {
                id: nanoid(),
                text:action.payload

            }
            state.todos.push(todo)
        },
        removeTodo: (state , action)=>{
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload 
            })
        }
    }
 }) 

 export const {addTodo, removeTodo} = TodoSlice.actions

//sare ke sare reducer leke store ko bhej deta hai 
//jo reducer store me honge vahi change honge na 
export const deefault =  TodoSlice.reducer