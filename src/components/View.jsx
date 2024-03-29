import styled from '@emotion/styled';
import { useState } from 'react';
import { BiBadgeCheck, BiPencil, BiSquareRounded, BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { completeTodo, deleteTodo, editInput, editTodo } from '../store/todoSlice';

const View = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editedTitle, setEditedTitle] = useState('');
  const todos = useSelector((state) => state.todos);
  console.log('🚀 ~ file: View.jsx:9 ~ View ~ todos:', todos);

  const handleIsDone = ({ id }) => {
    dispatch(
      completeTodo({
        id: id,
      })
    );
  };

  const handleDelete = ({ id }) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const handleEditInput = ({ id }) => {
    setEditedTitle('');
    dispatch(
      editInput({
        id: id,
      })
    );
  };

  const handleEdit = ({ id }) => {
    dispatch(
      editTodo({
        id: id,
        title: editedTitle,
      })
    );
  };

  return (
    <ViewSection>
      {todos.map((todo) => (
        <TodoContainer key={todo.id}>
          <Item>
            {todo.isDone === false ? (
              <BiSquareRounded
                onClick={() => handleIsDone(todo)}
                style={{ fontSize: '1.2rem', cursor: 'pointer' }}
              />
            ) : (
              <BiBadgeCheck
                onClick={() => handleIsDone(todo)}
                style={{ cursor: 'pointer' }}
              />
            )}

            {todo.isEdit === true ? (
              <EditInput
                type='text'
                autoFocus
                placeholder='수정 취소는 ESC'
                onChange={(e) => setEditedTitle(e.target.value)}
                maxLength={30}
                value={editedTitle}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleEdit(todo);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    handleEditInput(todo);
                  }
                }}
              />
            ) : (
              <Title onClick={() => navigate(`/${todo.id}`)}>{todo.title}</Title>
            )}
          </Item>
          <MoreFeature>
            <BiPencil
              onClick={() => handleEditInput(todo)}
              style={{ fontSize: 15 }}
            />
            <BiX
              onClick={() => handleDelete(todo)}
              style={{ fontSize: 20 }}
            />
          </MoreFeature>
        </TodoContainer>
      ))}
    </ViewSection>
  );
};

export default View;

const ViewSection = styled.div`
  width: 90%;
  height: 80%;
  padding: 0.5rem;
  gap: 1rem;
  color: #a1fcea;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #feff92;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: #2f2f2f;
    border-radius: 1rem;
  }

  @media (max-width: 620px) {
    width: 100%;
    height: 100%;
  }

`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;

  @media (max-width: 620px) {
    width: 100%;
    height: 100%;
    height: 1.5rem;
  }
`;

const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Title = styled.div`
  cursor: pointer;
  font-size: 1rem;
`;

const EditInput = styled.input`
  background-color: transparent;
  caret-color: #feff92;
  color: white;
  outline: none;
  border: none;
  border-bottom: 1px solid #feff92;
  ::placeholder {
    color: #aeaeae;
  }
  font-size: 1rem;
`;

const MoreFeature = styled.div`
  cursor: pointer;
  color: #fdff9291;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
