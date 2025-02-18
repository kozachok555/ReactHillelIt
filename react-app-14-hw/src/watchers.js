import { takeEvery } from "redux-saga/effects";
import { callGetTodosWorker, callAddTodosWorker, callDeleteTodosWorker,callToDoneTodosWorker,callToEditTodosWorker,callToClearTodosWorker} from './workers'
import { addTodos,deleteTodos,doneTodos,editTodos,clearTodos, getTodos} from './todoListSlice'

export function* todosWatcher(){
    yield takeEvery(addTodos.type, callAddTodosWorker)
    yield takeEvery(deleteTodos.type, callDeleteTodosWorker)
    yield takeEvery(doneTodos.type, callToDoneTodosWorker)
    yield takeEvery(editTodos.type, callToEditTodosWorker)
    yield takeEvery(clearTodos.type, callToClearTodosWorker)
    yield takeEvery(getTodos.type, callGetTodosWorker);
}