import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoList = createSlice({
  name: "todo",
  initialState,
  reducers: {
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
  clearTodos,
  fetchAddTodos,
  fetchTodos,
  setTodos,
  fetchDeleteTodos,
  fetchDoneTodos,
  fetchEditTodos,
} = todoList.actions;
export default todoList.reducer;
