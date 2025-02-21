import { takeEvery } from "redux-saga/effects";
import { callAddTodosWorker, callDeleteTodosWorker,callToDoneTodosWorker,callToEditTodosWorker,callToClearTodosWorker} from './workers'
import { ADD_TODO,DELETE_TODO,DONE_TODO,CLEAR_TODOS,EDIT_TODO} from './todoListSlice'

export function* todosWatcher(){
    yield takeEvery(ADD_TODO, callAddTodosWorker)
    yield takeEvery(DELETE_TODO, callDeleteTodosWorker)
    yield takeEvery(DONE_TODO, callToDoneTodosWorker)
    yield takeEvery(CLEAR_TODOS, callToClearTodosWorker)
    yield takeEvery(EDIT_TODO, callToEditTodosWorker);
}