import { addTodos } from "./todoListSlice";
import { editTodos } from "./todoListSlice";
import { doneTodos } from "./todoListSlice";
import { deleteTodos, setTodos } from "./todoListSlice";
import { put, call } from "redux-saga/effects";
const API_URL = "http://localhost:4000/todos";

const apiCall = async (url, method = "GET", body = null) => {
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  return response.json();
};
function* fetchTodosWorker() {
  try {
    const data = yield call(apiCall, API_URL);
    yield put(setTodos(data));
  } catch (err) {
    console.error("Error:", err);
  }
}

function* callAddTodosWorker(action) {
  const newTodo = yield call(apiCall, API_URL, "POST", action.payload);
  yield put(addTodos(newTodo));
}
function* callDeleteTodosWorker(action) {
  yield call(fetch, `${API_URL}/${action.payload}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  yield put(deleteTodos(action.payload));
}
function* callToDoneTodosWorker(action) {
  const todoId = action.payload;
  const todo = yield call(fetch, `${API_URL}/${todoId}`);
  const updatedTodo = yield todo.json();
  updatedTodo.checked = !updatedTodo.checked;
  yield call(apiCall, `${API_URL}/${todoId}`, "PUT", updatedTodo);
  yield put(doneTodos(todoId));
}
function* callToEditTodosWorker(action) {
  const updatedTodo = yield call(
    apiCall,
    `${API_URL}/${action.payload._id}`,
    "PUT",
    action.payload
  );
  yield put(editTodos(updatedTodo));
}
export {
  callAddTodosWorker,
  callDeleteTodosWorker,
  callToDoneTodosWorker,
  callToEditTodosWorker,
  fetchTodosWorker,
};
