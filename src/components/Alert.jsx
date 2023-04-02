import styled from '@emotion/styled';
import { useState } from 'react';

const useAlert = (message, onClick, todo) => {
  console.log(todo);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  const handleBtnClick = () => {
    console.log(todo);
    if (!todo) return; // todo 객체가 없으면 함수를 빠져나갑니다.
    onClick(todo.id);
    handleAlertClose();
  };

  const Alert = () => (
    <>
      {isAlertOpen === true ? (
        <ModalWrapper>
          <Overlay onClick={handleAlertClose} />
          <Content>
            <Title>{message}</Title>
            <BtnContainer>
              <OkayBtn onClick={handleBtnClick}>확인</OkayBtn>
              <CloseBtn onClick={handleAlertClose}>닫기</CloseBtn>
            </BtnContainer>
          </Content>
        </ModalWrapper>
      ) : null}
    </>
  );

  return [isAlertOpen, handleAlertOpen, handleAlertClose, Alert];
};

export default useAlert;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #232323;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #7c7b7bc5;
`;

const Content = styled.div`
  background-color: #efeeee;
  position: relative;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  border-radius: 1rem;
  width: 20rem;
  height: 6rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #232323;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const OkayBtn = styled.button`
  cursor: pointer;
  border: 1px solid #232323;
  background-color: #a1fcea;
  color: #232323;
  font-size: 1rem;
  padding: 1rem 3rem;
  border-radius: 5px;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border: 1px solid #232323;
  background-color: #feff92;
  color: #232323;
  font-size: 1rem;
  padding: 1rem 3rem;
  border-radius: 5px;
`;
