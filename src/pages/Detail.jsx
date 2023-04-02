import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  const paramId = useParams().id;
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id == paramId)[0];

  return (
    <Container>
      <Title>{todo?.title}</Title>
      <Details>
        <Status>{todo?.isDone === false ? '진행 중' : '완료'}</Status>
        <CreatedDate>만든 날짜 : {todo?.createdDate}</CreatedDate>
      </Details>
      <Btn
        onClick={() => {
          navigate('/');
        }}>
        돌아가기
      </Btn>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 20rem;
  height: 20rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #232323;
  border-radius: 1rem;
  padding: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: white;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: #a1fcea;
  margin-bottom: 0.5rem;
`;

const Details = styled.div``;

const CreatedDate = styled.div`
  color: #d3d3d3;
`;

const Status = styled.div`
  color: #feff92;
  margin-bottom: 1rem;
`;

const Btn = styled.button`
  background-color: transparent;
  color: #a1fcea;
  font-size: 1rem;
  cursor: pointer;
  width: 7rem;
  height: 2.5rem;
  border: 1px solid white;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border-radius: 0.5rem;
  :hover {
    background-color: #a1fcea;
    color: #232323;
  }
`;
