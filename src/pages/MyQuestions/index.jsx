import React, { useState, useEffect } from 'react';

import Header from "../../components/Header";
import Question from '../../components/Question';
import ContainerPage from '../../components/ContainerPage';
import InformationContainer from '../../components/InformationContainer';

import EmptyQuestions from "../../assets/images/empty-questions.svg";

import { useModal } from "../../providers/ModalProvider";

import api from "../../services/api";

const Room = () => {
    const { handleShowModal } = useModal();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const fetchQuestions = async () => {
          await api
            .get(`/question`)
            .then(({ data }) => (mounted ? setQuestions(data.response) : null))
            .catch(({ response }) =>
              response === undefined ? handleShowModal("Erro no servidor, as perguntas não podem ser apresentadas") : null
            );
        };
    
        fetchQuestions();
    
        return () => mounted = false;
    }, [questions, handleShowModal]);

    return ( 
        <>
            <Header />
            <ContainerPage>

                {
                    questions.length === 0 ? (
                        <InformationContainer>
                            <img src={EmptyQuestions} alt="" />
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
 
export default Room;