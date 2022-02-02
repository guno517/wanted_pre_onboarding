import React, { useState } from "react";
import styled from "styled-components";
import ModalContents from "./ModalContents";

const Base = styled.div`
  width: 90%;
  height: 300px;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  margin: 5px auto;
`;

const ModalText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ModaleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const ModalButton = styled.button`
  width: 130px;
  height: 70px;
  border-radius: 45px;
  background-color: #6600ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-style: none;
`;

export default function Modal() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Base>
        <ModalText>Modal</ModalText>
        <ModaleWrapper>
          <ModalButton onClick={showModal}>Open Modal</ModalButton>
          <ModalContents openModal={openModal} setOpenModal={setOpenModal} />
        </ModaleWrapper>
      </Base>
    </>
  );
}
