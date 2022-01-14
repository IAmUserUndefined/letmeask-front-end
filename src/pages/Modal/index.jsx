import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import { 
          ModalContainer, 
          ModalStyle, 
          Button, 
          ContainerButton, 
          ButtonDelete, 
          ButtonCancel, 
          MessageModal,
          MessageModalMain 
        } from "./styles";

import { useModal } from "../../providers/ModalProvider";

const Modal = () => {
  const { message, display, handleCloseModal, type } = useModal();

  return (
    <ModalContainer onClick={handleCloseModal} display={display}>
          {
              type === "room" ? (
                <ModalStyle id="modal">
                  <TiDeleteOutline />
                  <MessageModal id="message">Encerrar Sala</MessageModal>
                  <div>
                    <span>Tem certeza que você deseja encerrar esta sala?</span>
                  </div>
                  <ContainerButton>
                    <ButtonCancel onClick={() => handleCloseModal}>Cancelar</ButtonCancel>
                    <ButtonDelete>Sim, encerrar</ButtonDelete>
                  </ContainerButton>
                </ModalStyle>
              ) : null
          }

          {
            type === "question" ? (
              (
                <ModalStyle id="modal">
                  <MdOutlineDelete />
                  <MessageModal id="message">Excluir pergunta</MessageModal>
                  <div>
                    <span>Tem certeza que você deseja excluir essa pergunta?</span>
                  </div>
                  <ContainerButton>
                    <ButtonCancel onClick={() => handleCloseModal}>Cancelar</ButtonCancel>
                    <ButtonDelete>Sim, excluir</ButtonDelete>
                  </ContainerButton>
                </ModalStyle>
              )
            ) : null
          }

          {
            type !== "room" && type !== "question" ? (
              <ModalStyle id="modal">
                <MessageModalMain id="message">{message}</MessageModalMain>
                <Button>Ok</Button>
              </ModalStyle>
            ) : null
          }
    </ModalContainer>
  );
};

export default Modal;