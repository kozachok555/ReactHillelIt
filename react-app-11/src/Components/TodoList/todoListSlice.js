import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToList: (state,action)=>{
            state.todoList.push(action.payload)
        }
    }
})
export const {addToList} = todoListSlice.actions;
export default todoListSlice.reducer;