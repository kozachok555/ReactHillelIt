import {configureStore } from '@reduxjs/toolkit'

import counterSlice from '../src/Components/Counter/counterSlice';
import todoSlice from './Components/TodoList/todoListSlice'
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todoList: todoSlice,
    }
})