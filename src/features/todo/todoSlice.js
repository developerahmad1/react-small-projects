import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      return {
        ...state,
        todos : action.payload,
      }
    },
    addTodo: (state, action) => {
      state.todos?.push({ id: nanoid(), text: action.payload });
    },
    removeTodo: (state, action) => {
      return {
        ...state,
        todos : state.todos?.filter((todo) => todo.id !== action.payload),
      };
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, setTodos } = todoSlice.actions;
