import { MdOutlineDelete } from "react-icons/md";

import { 
    ModalStyle, 
    ContainerButton, 
    ButtonDelete, 
    ButtonCancel, 
    MessageModal,
  } from "../styles";

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

const QuestionModal = () => {

  const { handleShowModal, id } = useModal();

    const handleQuestionDelete = async () => {
        await api
        .delete(`/question/${id}`)
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    }

    return (    
      <>
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
      </>
    );
}

export default QuestionModal;