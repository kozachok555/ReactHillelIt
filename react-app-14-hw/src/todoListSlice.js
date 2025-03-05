import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoList = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    },
    deleteTodos: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo._id !== action.payload),
      };
    },
    editTodos: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo._id === action.payload._id
            ? { ...todo, name: action.payload.name }
            : todo
        ),
      };
    },
    doneTodos: (state, action) => {
        const todo = state.todoList.find((todo) => todo._id === action.payload);
        if (todo) {
          todo.checked = !todo.checked;
        }
    },
    fetchTodos: (state) => state,
    setTodos: (state, action) => {
      return {
        ...state,
        todoList: action.payload,
      };
    },
    clearTodos: () => {
      return { todoList: [] };
    },
    fetchAddTodos: (state) => {
      return state;
    },
    fetchDeleteTodos: (state) => {
      return state;
    },
    fetchEditTodos: (state) => {
      return state;
    },
    fetchDoneTodos: (state) => {
      return state;
    },
  },
});

export const {
  addTodos,
  deleteTodos,
  editTodos,
  doneTodos,
  clearTodos,
  fetchAddTodos,
  fetchTodos,
  setTodos,
  fetchDeleteTodos,
  fetchDoneTodos,
  fetchEditTodos,
} = todoList.actions;
export default todoList.reducer;
