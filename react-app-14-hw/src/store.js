import {configureStore } from '@reduxjs/toolkit' 
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./rootSaga"
import todoReducer from './todoListSlice'
export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)