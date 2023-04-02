import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const ConfirmAlert = ({ message, onClick, isAlertOpen, handleAlertClose }) => {


  return (
    <>
      {isAlertOpen === true ? (
        <ModalWrapper>
          <Overlay onClick={handleAlertClose} />
          <Content>
            <Title>{message}</Title>
            <BtnContainer>
              <OkayBtn onClick={onClick}>확인</OkayBtn>
              <CloseBtn onClick={handleAlertClose}>닫기</CloseBtn>
            </BtnContainer>
          </Content>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default ConfirmAlert;

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
