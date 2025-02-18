import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodos } from "./todoListSlice";
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
            dispatch(addTodos({ id: Date.now(), text, completed: false }));
            setText("");
          }
        }}
      >
        Add
      </button>
      {todoList.length > 0 ? (
        todoList.map((e) => <p key={e.id}>{e.text}</p>)
      ) : (
        <p>Список пуст</p>
      )}
    </div>
  );
}
