import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Question from '../../components/Question';
import ContainerPage from '../../components/ContainerPage';
import InformationContainer from '../../components/InformationContainer';
import LoadingGif from '../../components/LoadingGif';

import EmptyQuestions from "../../assets/images/empty-questions.svg";

import { ContainerQuestion, Button } from "./styles";

import { useModal } from "../../providers/ModalProvider";

import api from "../../services/api";

const Room = () => {
    const { handleShowModal } = useModal();
    const { code } = useParams();
    const [admin, setAdmin] = useState(false);
    const [roomName, setRoomName] = useState();
    const [buttonChildren, setButtonChidren] = useState("Enviar Pergunta");
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();
    const handleCreateQuestion = async () => {
        const question = document.getElementById("question");

        if(!question.value)
            return handleShowModal("Preencha o campo de questão");

        setButtonChidren(<LoadingGif />);

        await api
            .post(`/question/${code}`, {
                question: question.value
            })
            .catch(({ response }) =>
                response
                  ? handleShowModal(response.data.response)
                  : handleShowModal("Erro no Servidor")
            );

        question.value = "";
        setButtonChidren("Enviar Pergunta");

    }

    useEffect(() => {
        let mounted = true;
  
        const handleRoomName = async () => {
            await api
                .get(`/room/${code}`, {
                })
                .then(({ data }) => (
                    mounted ? setRoomName(data.response.name) : null
                ))
                .catch(() => {
                    navigate("/create-room");
                    handleShowModal("Essa sala não pode ser acessada")
                });
        }

        const handleAdmin = async () => {
            await api
              .get(`/room-code`)
              .then(({ data }) => { 
                  if(mounted) 
                    return data.response === code ? setAdmin(true) : null;
              })
              .catch(() =>
                console.log("Erro no servidor")
            );
        };
    
        const fetchQuestions = async () => {
          await api
            .get(`/question/${code}`)
            .then(({ data }) => (mounted ? setQuestions(data.response) : null))
            .catch(() =>
                console.log("Erro no servidor")
            );
        };
    
        handleRoomName();
        handleAdmin();
        fetchQuestions();
    
        return () => mounted = false;
    }, [questions, code, navigate, handleShowModal]);

    return ( 
        <>
            <Header admin={admin} />
            <ContainerPage>

                <h1>Sala {roomName}</h1>
                {
                    !admin ? (
                        <ContainerQuestion>
                            <form>
                                <textarea placeholder="O que você quer perguntar?" id="question"></textarea>
                                <div>
                                    <Button type="button" onClick={() => handleCreateQuestion()}>{buttonChildren}</Button>
                                </div>
                            </form>
                        </ContainerQuestion>
                    ) : null
                }

                {
                    questions.length === 0 ? (
                        <InformationContainer>
                            <img src={EmptyQuestions} alt="Imagem representando balões de pergunta" />
                            <h2>Nenhuma pergunta por aqui</h2>
                            {
                                admin ? (
                                    <span>
                                        Envie o código desta sala para seus amigos e comece a responder perguntas!
                                    </span>
                                ) :
        
                                (
                                    <span>
                                        Seja a primeira pessoa a fazer uma pergunta!
                                    </span>
                                )
                            }
                        </InformationContainer>
                    ) :

                    questions.map((question) => (
                        (
                            <Question 
                                key={question.id} 
                                questionId={question.id} 
                                userId={question.userId}
                                question={question.name} 
                                response={question.response} 
                                admin={admin}
                            />
                        )
                    ))
                }

            </ContainerPage>
        </>
     );
}
 
export default Room;