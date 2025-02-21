import {configureStore } from '@reduxjs/toolkit' 
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./rootSaga"
import todoList from './todoListSlice'
export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        todo: todoList,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)