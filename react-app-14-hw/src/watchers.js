import { takeEvery } from "redux-saga/effects";
import {
  callAddTodosWorker,
  callDeleteTodosWorker,
  callToDoneTodosWorker,
  callToEditTodosWorker,
  fetchTodosWorker,
} from "./workers";
import {
  fetchAddTodos,
  fetchDeleteTodos,
  fetchDoneTodos,
  fetchEditTodos,
  fetchTodos,
} from "./todoListSlice";

export function* todosWatcher() {
  yield takeEvery(fetchAddTodos.type, callAddTodosWorker);
  yield takeEvery(fetchDeleteTodos.type, callDeleteTodosWorker);
  yield takeEvery(fetchDoneTodos.type, callToDoneTodosWorker);
  yield takeEvery(fetchEditTodos.type, callToEditTodosWorker);
  yield takeEvery(fetchTodos.type, fetchTodosWorker);
}
