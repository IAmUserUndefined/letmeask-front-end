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
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(false);
    const [roomName, setRoomName] = useState();
    const [buttonChildren, setButtonChidren] = useState("Enviar Pergunta");
    const [questions, setQuestions] = useState([]);

    const handleQuestion = async () => {
        const question = document.getElementById("response");

        if(!question.value)
            return handleShowModal("Preencha o campo de questão");

        setButtonChidren(<LoadingGif />);

        await api
        .post(`/question/${code}`, {
            question: question.value
        })
        .catch(({ response }) =>
          response === undefined ? console.log("Erro no servidor") : null
        );

        question.value = "";
        setButtonChidren("Enviar Pergunta");

    }

    useEffect(() => {
        let mounted = true;
  
        const handleAdmin = async () => {
            await api
              .get(`/room-code`)
              .then(({ data }) => { 
                  if(mounted) 
                    return data.response === code ? setAdmin(true) : null;
              })
              .catch(({ response }) =>
                response === undefined ? console.log("Erro no servidor") : null
              );
        };
    
        const fetchQuestions = async () => {
          await api
            .get(`/question/${code}`)
            .then(({ data }) => (mounted ? setQuestions(data.response) : null))
            .catch(({ response }) =>
              response === undefined ? console.log("Erro no servidor") : null
            );
        };

        const handleRoomName = async () => {
            await api
                .get(`/room/${code}`, {
                })
                .then(({ data }) => (
                    mounted ? setRoomName(data.response.name) : null
                ))
                .catch(({ response }) => {
                    handleShowModal("Houve um problema com essa sala")
                    navigate("/create-room")
                });
        }
    
        handleAdmin();
        handleRoomName();
        fetchQuestions();
    
        return () => mounted = false;
    }, [questions, handleShowModal, code, navigate]);

    return ( 
        <>
            <Header admin={admin} />
            <ContainerPage>

                <h1>Sala {roomName}</h1>
                {
                    !admin ? (
                        <ContainerQuestion>
                            <textarea placeholder="O que você quer perguntar?" id="response"></textarea>
                            <div>
                                <Button onClick={() => handleQuestion()}>{buttonChildren}</Button>
                            </div>
                        </ContainerQuestion>
                    ) : null
                }

                {
                    questions.length === 0 ? (
                        <InformationContainer>
                            <img src={EmptyQuestions} alt="Ilustração" />
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