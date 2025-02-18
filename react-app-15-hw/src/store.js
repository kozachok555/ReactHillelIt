import {configureStore } from '@reduxjs/toolkit'
import {thunk} from "redux-thunk"   
import swapiSlice from './Components/SwapiComponent/swapiSlice';

export const store = configureStore({
    reducer: {
        swapiContent: swapiSlice,
    },
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(), thunk]
})