import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    todoList: [],
}

const todoList = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            if (action.payload) {
                state.todoList.push(action.payload);
            }
        },
        deleteTodos: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        },
        editTodos: (state,action)=>{
            const todo = state.todoList.find(e => e.id === action.payload.id);
            if(todo) todo.text = action.payload.text;
        },
        doneTodos: (state,action)=>{
            const todo = state.todoList.find(e => e.id === action.payload);
            if(todo) todo.completed = !todo.completed;
        },
        clearTodos: ()=>{
            return {todoList: []};
        }
    }
})
export const ADD_TODO = "todos/ADD_TODO";
export const DELETE_TODO = "todos/DELETE_TODO";
export const DONE_TODO = "todos/DONE_TODO";
export const EDIT_TODO = "todos/EDIT_TODO";
export const CLEAR_TODOS = "todos/CLEAR_TODOS";

export const {addTodos, deleteTodos,editTodos,doneTodos,clearTodos} = todoList.actions;
export default todoList.reducer;