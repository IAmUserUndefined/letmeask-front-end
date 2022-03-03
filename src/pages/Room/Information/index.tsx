import React from 'react';

import InformationContainer from '../../../components/InformationContainer';

import EmptyQuestions from "../../../assets/images/empty-questions.svg";

type InformationTypes = {
    admin: boolean;
}

const Information = ({ admin }: InformationTypes) => {
    return (
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
    );
}

export default Information;