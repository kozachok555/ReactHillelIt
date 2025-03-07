import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  clearTodos,
  fetchAddTodos,
  fetchDeleteTodos,
  fetchTodos,
  fetchDoneTodos,
  fetchEditTodos,
} from "./todoListSlice";
import "./TodoList.scss";
//          http://localhost:4000/todos
export default function TodoList() {
  const todoList = useSelector((todo) => todo.todo.todoList);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getIdTodo, setIdTodo] = useState(null);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="TodoList">
      <p>Todo</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text.trim()) {
            dispatch({
              type: fetchAddTodos.type,
              payload: { name: text, checked: false },
            });
            setText("");
          }
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(clearTodos())}>Clear</button>
      {todoList.length > 0 ? (
        todoList.map((e) => (
          <div key={e._id}>
            <div className="todo-card">
              <h5>{e.name}</h5>
              <button
                className="btn-delete"
                onClick={() =>
                  dispatch({ type: fetchDeleteTodos.type, payload: e._id })
                }
              >
                Delete
              </button>
              <input
                type="checkbox"
                checked={e.checked}
                onChange={() =>
                  dispatch({ type: fetchDoneTodos.type, payload: e._id })
                }
              />
              <button
                onClick={() => {
                  setIdTodo(e._id);
                  setIsModalOpen(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Список пуст</p>
      )}
      {isModalOpen && (
        <div className="modal-window">
          <div className="info-box">
            <h3>Edit text</h3>
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter task"
            />
          </div>
          <button
            onClick={() => {
              console.log(getIdTodo)
              if (text.trim()) {
                dispatch({
                  type: fetchEditTodos.type,
                  payload: { _id: getIdTodo, name: text },
                });
              }
              setIsModalOpen(false);
              setIdTodo(null);
              setText("");
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
