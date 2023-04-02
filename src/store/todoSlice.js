import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { now } from '../utils/date';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: v4(),
      title: '체크박스를 눌러 할 일을 완료하세요',
      isDone: false,
      isEdit: false,
      createdDate: now(),
    },
    {
      id: v4(),
      title: '연필 아이콘을 눌러 할 일을 수정하세요',
      isDone: false,
      isEdit: false,
      createdDate: now(),
    },
    {
      id: v4(),
      title: 'X 버튼을 눌러 할 일을 삭제하세요',
      isDone: false,
      isEdit: false,
      createdDate: now(),
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
