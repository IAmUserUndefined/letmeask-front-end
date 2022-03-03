import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ContainerResponseFieldStyle, ButtonResponse, ButtonCancel } from './styles';

import { useModal } from "../../../providers/ModalProvider";

import api from "../../../services/api";

import { QuestionTypes } from "../../../types/index";

type ContainerResponseFieldTypes = {
    question: QuestionTypes;
    display: string;
    handleCloseResponseField: () => void;
}

const ContainerResponseField = ({ question, display, handleCloseResponseField }: ContainerResponseFieldTypes) => {
    const { id } = question;
    const { handleShowModal } = useModal();
    const { code } = useParams();
    const [newResponse, setNewReponse] = useState("");
    const handleResponse = async (e: any) => {
        e.preventDefault();

        if(!newResponse)
            return handleShowModal("Preencha o campo de resposta");

        await api
          .post(`/response/${code}/${id}`, {
              response: newResponse
          })
        .catch(({ response }) =>
            response
                ? handleShowModal(response.data.response)
                : handleShowModal("Erro no Servidor")
        );

        handleCloseResponseField();
    }

    return (
        <ContainerResponseFieldStyle display={display}>
            <form onSubmit={handleResponse}>
                <textarea 
                    placeholder="Digite sua resposta"
                    value={newResponse}
                    onChange={event => setNewReponse(event.target.value)}
                ></textarea>
                <div>
                    <ButtonCancel type="button" onClick={() => handleCloseResponseField()}>
                        Cancelar
                    </ButtonCancel>
                    <ButtonResponse type="submit">
                        Responder
                    </ButtonResponse>
                </div>
            </form>
        </ContainerResponseFieldStyle>
    );
}

export default ContainerResponseField;