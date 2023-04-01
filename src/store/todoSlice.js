import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: '할 일 1',
      isDone: false,
    },
    {
      id: 2,
      title: '할 일 2',
      isDone: false,
    },
    {
      id: 3,
      title: '할 일 3',
      isDone: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
