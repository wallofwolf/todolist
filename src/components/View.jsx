import styled from '@emotion/styled';
import { BiPencil } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import { BiSquareRounded } from 'react-icons/bi';
import { BiBadgeCheck } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo } from '../store/todoSlice';

const View = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log('🚀 ~ file: View.jsx:9 ~ View ~ todos:', todos);

  const handleIsDone = ({ id }) =>
    dispatch(
      completeTodo({
        id: id,
      })
    );

  const handleDelete = ({ id }) =>
    dispatch(
      deleteTodo({
        id: id,
      })
    );

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
              <BiBadgeCheck onClick={() => handleIsDone(todo)} />
            )}

            <Title>{todo.title}</Title>
          </Item>
          <MoreFeature>
            <BiPencil style={{ fontSize: 15 }} />
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
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
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

const MoreFeature = styled.div`
  cursor: pointer;
  color: #fdff9291;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
