import {configureStore } from '@reduxjs/toolkit' 
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga"

export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        swapi,
    },
    middleware: ()=>[sagaMiddleware],
})
sagaMiddleware.run(rootSaga)