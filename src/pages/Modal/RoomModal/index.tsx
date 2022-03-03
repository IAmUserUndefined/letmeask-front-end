import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

import { 
    ModalStyle, 
    ContainerButton, 
    ButtonDelete, 
    ButtonCancel, 
    MessageModal,
  } from "../styles";

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

const RoomModal = () => {
    const { handleShowModal, id } = useModal();
    const navigate = useNavigate();
    const handleRemoveRoom = async () => {
        await api
        .delete(`/room/${id}`)
        .then(({ data }) => {
            navigate("/create-room");
            handleShowModal(data.response);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
      }  

      return (
          <>
                <ModalStyle id="modal">
                    <TiDeleteOutline />
                    <MessageModal id="message">Encerrar Sala</MessageModal>
                    <div>
                        <span>Tem certeza que você deseja encerrar esta sala?</span>
                    </div>
                    <ContainerButton>
                        <ButtonCancel>Cancelar</ButtonCancel>
                        <ButtonDelete onClick={handleRemoveRoom}>Sim, encerrar</ButtonDelete>
                    </ContainerButton>
                </ModalStyle>
          </>
      );
}

export default RoomModal;