import styled from '@emotion/styled';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BiSquareRounded } from 'react-icons/bi';
import { BiBadgeCheck } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const View = () => {
  const todos = useSelector((state) => state.todos);
  console.log('🚀 ~ file: View.jsx:9 ~ View ~ todos:', todos);

  return (
    <ViewSection>
      {todos.map((todo) => (
        <TodoContainer key={todo.id}>
          <Item>
            <BiSquareRounded style={{ fontSize: '1.2rem', cursor: 'pointer' }} />
            <Title>{todo.title}</Title>
          </Item>
          <Dots>
            <BiDotsHorizontalRounded />
          </Dots>
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

const Dots = styled.div`
  cursor: pointer;
  color: #feff92;
`;
