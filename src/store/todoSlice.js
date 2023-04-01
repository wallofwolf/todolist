import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: '할 일 1',
      isDone: false,
      isEdit: false,
    },
    {
      id: 2,
      title: '할 일 2',
      isDone: false,
      isEdit: false,
    },
    {
      id: 3,
      title: '할 일 3',
      isDone: false,
      isEdit: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    completeTodo: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      }),
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editInput: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isEdit: !todo.isEdit,
          };
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            isEdit: !todo.isEdit,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, completeTodo, deleteTodo, editInput, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
