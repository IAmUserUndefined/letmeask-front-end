import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Question from '../../components/Question';
import ContainerPage from '../../components/ContainerPage';

import Information from "./Information";
import QuestionContainer from "./QuestionContainer";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

import { QuestionTypes } from "../../types";

const Room = () => {
    const { code } = useParams();
    const { handleShowModal } = useModal();
    const [admin, setAdmin] = useState(false);
    const [roomName, setRoomName] = useState();
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

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
    
        return () => {
            mounted = false;
            return;
        }
    }, [questions, code, navigate, handleShowModal]);

    return ( 
        <>
            <Header admin={admin} />
            <ContainerPage>

                <h1>Sala {roomName}</h1>
                { !admin ? <QuestionContainer code={code} /> : null }

                {
                    questions.length === 0 ? <Information admin={admin} /> 
                        : questions.map((question: QuestionTypes) => (
                            (
                                <Question 
                                    key={question.id} 
                                    question={question} 
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