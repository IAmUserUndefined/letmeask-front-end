import React from "react";

import { ModalContainer } from "./styles";

import { useModal } from "../../providers/ModalProvider";

import RoomModal from "./RoomModal";
import QuestionModal from "./QuestionModal";
import ModalMain from "./ModalMain";

const Modal = () => {
  const { display, handleCloseModal, type } = useModal();

  return (
    <ModalContainer onClick={handleCloseModal} display={display}>
          {
              type === "room" ? <RoomModal /> 
                : 
                  type === "question" ? <QuestionModal /> 
                    : 
                      <ModalMain />
          }
    </ModalContainer>
  );
};

export default Modal;