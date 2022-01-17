import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Question from '../../components/Question';
import ContainerPage from '../../components/ContainerPage';
import InformationContainer from '../../components/InformationContainer';

import EmptyQuestions from "../../assets/images/empty-questions.svg";

import { useModal } from "../../providers/ModalProvider";

import api from "../../services/api";

const MyQuestions = () => {
    const { handleShowModal } = useModal();
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;
    
        const fetchQuestions = async () => {
          await api
            .get(`/question`)
            .then(({ data }) => (mounted ? setQuestions(data.response) : null))
            .catch(() => {
                handleShowModal("Erro no servidor, as perguntas não podem ser apresentadas");
                navigate("/create-room");
            });
        };
    
        fetchQuestions();
    
        return () => mounted = false;
    }, [questions, handleShowModal, navigate]);

    return ( 
        <>
            <Header />
            <ContainerPage>

                {
                    questions.length === 0 ? (
                        <InformationContainer>
                            <img src={EmptyQuestions} alt="Imagem representando balões de pergunta" />
                            <h2>Nenhuma pergunta por aqui</h2>
                            <span>
                                Entre em uma sala e comece a perguntar!
                            </span>
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
                        />
                        )
                    ))
                }

            </ContainerPage>
        </>
     );
}
 
export default MyQuestions;