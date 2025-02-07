import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToList: (state,action)=>{
            return {...state, todoList: [...state.todoList, action.payload]};
        }
    }
})
export const {addToList} = todoListSlice.actions;
export default todoListSlice.reducer;