import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";

import { 
    ContainerQuestion, ContentQuestion, ContainerResponse, ContainerResponseField, ButtonResponse, ButtonCancel, Footer 
} from './styles';

import { MdOutlineDelete, MdOutlineQuestionAnswer } from "react-icons/md";

import { useModal } from "../../providers/ModalProvider";

import api from "../../services/api";

const Question = ({ admin, questionId, userId, question, response  }) => {
    const { pathname } = useLocation();
    const { code } = useParams();
    const { handleShowModal } = useModal();
    const [name, setName] = useState("");
    const [display, setDisplay] = useState("none");
    const handleShowResponseField = () => setDisplay("block");
    const handleCloseResponseField = () => setDisplay("none");
    const handleResponse = async () => {
        const response = document.getElementById("response");

        if(!response.value)
            return handleShowModal("Preencha o campo de resposta");

        await api
          .post(`/response/${code}/${questionId}`, {
              response: response.value
          })
          .catch(({ response }) =>
              response === undefined ? handleShowModal("Erro no servidor") : null
          );

          handleCloseResponseField();
    }
    const handleDeleteQuestion = async () => {
        handleShowModal("", "question", questionId);
    }

    useEffect(() => {

        let mounted = true;

        const fetchName = async () => {
            await api
            .post("/get-name", {
                userId: userId,
              })
            .then(({ data }) => (mounted ? setName(data.response) : null))
            .catch(({ response }) =>
                response === undefined ? console.log("Erro no servidor") : null
            );
        };
  
        fetchName();

      return () => mounted = false;

  
    }, [userId]);

    return ( 
        <>
            <ContainerQuestion>
                <ContentQuestion>
                        {question}
                </ContentQuestion>
                <Footer>
                    <div>
                        <strong>
                            {name}
                        </strong>
                    </div>
                    <div>
                        {
                            admin && pathname !== "/my-questions" && !response 
                                ? <MdOutlineQuestionAnswer onClick={() => handleShowResponseField()} /> : null
                        }
                        {
                            admin && pathname !== "/my-questions" ? <MdOutlineDelete onClick={() => handleDeleteQuestion()} /> : null
                        }
                        {
                            pathname === "/my-questions" ? <MdOutlineDelete onClick={() => handleDeleteQuestion()} /> : null
                        }
                    </div>
                </Footer>
                {
                    response ? (
                        <ContainerResponse>
                            Resposta: {response}
                        </ContainerResponse>
                    ) : null
                }
                <ContainerResponseField display={display}>
                    <textarea placeholder="Digite sua resposta" id="response"></textarea>
                    <div>
                        <ButtonCancel onClick={() => handleCloseResponseField()}>
                            Cancelar
                        </ButtonCancel>
                        <ButtonResponse onClick={() => handleResponse()}>
                            Responder
                        </ButtonResponse>
                    </div>
                </ContainerResponseField>
            </ContainerQuestion>
        </>
     );
}
 
export default Question;