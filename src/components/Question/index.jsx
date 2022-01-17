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
    const handleDeleteQuestion = async () => handleShowModal("", "question", questionId);
    const handleResponse = async () => {
        const response = document.getElementById(`response${questionId}`);

        if(!response.value)
            return handleShowModal("Preencha o campo de resposta");

        await api
          .post(`/response/${code}/${questionId}`, {
              response: response.value
          })
        .catch(({ response }) =>
            response
                ? handleShowModal(response.data.response)
                : handleShowModal("Erro no Servidor")
        );

        handleCloseResponseField();
    }

    useEffect(() => {

        let mounted = true;

        const fetchName = async () => {
            await api
            .post("/get-name", {
                userId: userId,
              })
            .then(({ data }) => (mounted ? setName(data.response) : null))
            .catch(() =>
                console.log("Erro no servidor")
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
                            {response}
                        </ContainerResponse>
                    ) : null
                }
                <ContainerResponseField display={display}>
                    <form>
                        <textarea placeholder="Digite sua resposta" id={`response${questionId}`}></textarea>
                        <div>
                            <ButtonCancel type="button" onClick={() => handleCloseResponseField()}>
                                Cancelar
                            </ButtonCancel>
                            <ButtonResponse type="button" onClick={() => handleResponse()}>
                                Responder
                            </ButtonResponse>
                        </div>
                    </form>
                </ContainerResponseField>
            </ContainerQuestion>
        </>
     );
}
 
export default Question;