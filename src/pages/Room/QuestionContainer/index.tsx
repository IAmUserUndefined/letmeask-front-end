import React, { ReactElement, useState } from 'react';

import { QuestionContainerStyle, Button } from "./styles";

import LoadingGif from '../../../components/LoadingGif';

import { useModal } from "../../../providers/ModalProvider";

import api from "../../../services/api";

type QuestionContainerType = {
    code: string | undefined;
}

const QuestionContainer = ({ code }: QuestionContainerType) => {

    const [buttonChildren, setButtonChidren] = useState<string | ReactElement>("Enviar Pergunta");
    const [question, setQuestion] = useState("");
    const { handleShowModal } = useModal();
    const handleCreateQuestion = async (e: any) => {
        e.preventDefault();
        
        if(!question)
            return handleShowModal("Preencha o campo de questão");
    
        setButtonChidren(<LoadingGif />);
    
        await api
            .post(`/question/${code}`, {
                question: question
            })
            .catch(({ response }) =>
                response
                  ? handleShowModal(response.data.response)
                  : handleShowModal("Erro no Servidor")
            );
    
        setQuestion("");
        setButtonChidren("Enviar Pergunta");
    
    }

    return (
        <QuestionContainerStyle>
            <form onSubmit={handleCreateQuestion}>
                <textarea 
                    placeholder="O que você quer perguntar?" 
                    value={question}
                    onChange={event => setQuestion(event.target.value)}
                ></textarea>
                <div>
                    <Button type="submit">{buttonChildren}</Button>
                </div>
            </form>
        </QuestionContainerStyle>
    );
}

export default QuestionContainer;