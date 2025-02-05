import {configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"   
import todoSlice from './components/Task/slice';

export const store = configureStore({
    reducer: {
        todoList: todoSlice,
    },
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(), thunk]
})