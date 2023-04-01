import styled from '@emotion/styled';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '.././store/todoSlice';

const Addtodo = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');

  return (
    <AddSection>
      <AddTodo
        type='text'
        placeholder='여기 할 일을 입력하고 Enter를 누르세요'
        autoFocus={true}
        maxLength={30}
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <AddBtn
        onClick={() => {
          dispatch(
            addTodo({
              id: Date.now(),
              title: todoTitle,
              isDone: false,
            })
          );
          setTodoTitle('');
        }}>
        추가
      </AddBtn>
    </AddSection>
  );
};

export default Addtodo;

const AddSection = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  border-bottom: 1px solid #feff92;
`;

const AddTodo = styled.input`
  background-color: transparent;
  caret-color: #feff92;
  color: white;
  outline: none;
  border: none;
  flex: 0.9;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  ::placeholder {
    color: #aeaeae;
  }
`;

const AddBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #feff92;
  flex: 0.1;
  font-size: 0.9rem;
`;
