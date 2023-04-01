import styled from '@emotion/styled';
import Addtodo from './AddTodo';
import View from './View';

const Main = () => {
  return (
    <Container>
      <View />
      <Addtodo />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 35rem;
  height: 45rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #232323;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
