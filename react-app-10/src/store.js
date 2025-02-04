import {configureStore } from '@reduxjs/toolkit'

import counterSlice from '../src/Components/Counter/slice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})