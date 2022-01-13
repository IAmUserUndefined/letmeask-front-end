import React, { useState } from 'react';

import Header from "../../components/Header";
import Question from './Question';
import { ContainerPage, InformationContainer, ContainerQuestion, Button } from "./styles";

const Room = () => {
    const [admin] = useState(true);
    const [questions] = useState([
        "João"
    ]);

    return ( 
        <>
            <Header admin={admin} />
            <ContainerPage>

                <h1>Sala React</h1>
                {
                    !admin ? (
                        <ContainerQuestion>
                            <textarea placeholder="O que você quer perguntar?"></textarea>
                            <div>
                                <strong>João Pedro</strong>
                                <Button>Enviar Pergunta</Button>
                            </div>
                        </ContainerQuestion>
                    ) : null
                }
                {
                    questions.length === 0 ? (
                        <InformationContainer>
                            <img src="images/empty-questions.svg" alt="" />
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

                    questions.map(() => (
                        (
                            <Question key={Math.random()} response={"Eu acho que o problema aconteceu por isso."} admin={admin}/>
                        )
                    ))
                }

            </ContainerPage>
        </>
     );
}
 
export default Room;