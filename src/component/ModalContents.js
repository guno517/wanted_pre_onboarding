import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100%;
  height: 305px;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-28px);
  box-sizing: border-box;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 150px;
  background: white;
  position: relative;
  border-radius: 15px;
`;

const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 auto;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  border-style: none;
  background: none;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 24px;
  padding: 0;
`;

export default function ModalContents({ openModal, setOpenModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openModal) {
        setOpenModal(false);
      }
    },
    [openModal, setOpenModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {openModal ? (
        <ModalBackground onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <CloseBtn onClick={() => setOpenModal(false)}>X</CloseBtn>
            <ModalContent>HELLO CODESTATES!</ModalContent>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}
