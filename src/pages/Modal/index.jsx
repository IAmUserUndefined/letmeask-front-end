import React from "react";
import { useNavigate } from "react-router-dom";

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

import api from "../../services/api";

const Modal = () => {
  const { message, display, handleShowModal, handleCloseModal, type, id } = useModal();
  const navigate = useNavigate();
  const handleLink = (link) => navigate(link);
  const handleQuestionDelete = async () => {
      await api
      .delete(`/question/${id}`)
      .catch(({ response }) =>
          response === undefined ? handleShowModal("Erro no servidor") : null
      );
  }
  const handleRemoveRoom = async () => {
    await api
    .delete(`/room/${id}`)
    .then(({ data }) => {
        handleLink("/create-room");
        handleShowModal(data.response);
    })
    .catch(({ response }) =>
      response
        ? handleShowModal(response.data.response)
        : handleShowModal("Erro no Servidor")
    );
  }  

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
                    <ButtonCancel>Cancelar</ButtonCancel>
                    <ButtonDelete onClick={() => handleRemoveRoom()}>Sim, encerrar</ButtonDelete>
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
                    <ButtonCancel>Cancelar</ButtonCancel>
                    <ButtonDelete onClick={() => handleQuestionDelete()}>Sim, excluir</ButtonDelete>
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