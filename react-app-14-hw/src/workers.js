
import { addTodos } from "./todoListSlice"
import { editTodos } from "./todoListSlice"
import { doneTodos } from "./todoListSlice"
import { clearTodos } from "./todoListSlice"
import { deleteTodos } from "./todoListSlice"
import {put} from "redux-saga/effects"

function* callAddTodosWorker(action){
    yield put(addTodos(action.payload))
}
function* callDeleteTodosWorker(action){
    yield put(deleteTodos(action.payload))
}
function* callToDoneTodosWorker(action){
    yield put(doneTodos(action.payload))
}
function* callToEditTodosWorker(action){
    yield put(editTodos(action.payload))
}
function* callToClearTodosWorker(){
    yield put(clearTodos())
}
export{
    callAddTodosWorker,
    callDeleteTodosWorker,
    callToDoneTodosWorker,
    callToEditTodosWorker,
    callToClearTodosWorker
}