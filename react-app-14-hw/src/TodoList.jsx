import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_TODO, CLEAR_TODOS, DELETE_TODO } from "./todoListSlice";
import './TodoList.scss'
export default function TodoList() {
  const todoList = useSelector((todo) => todo.todo.todoList);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
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
              type: ADD_TODO,
              payload: { id: Date.now(), text, completed: false },
            });
            setText("");
          }
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: CLEAR_TODOS })}>Clear</button>
      {todoList.length > 0 ? (
        todoList.map((e) => <p key={e.id}>
          <div className="todo-card">
            <h5>{e.text}</h5>
            <button className="btn-delete" onClick={() => dispatch({ type: DELETE_TODO, payload: e.id })}>Delete</button>
          </div>
        </p>)
      ) : (
        <p>Список пуст</p>
      )}
    </div>
  );
}
