import React, { useState } from 'react';

import Header from "../../components/Header";
import Question from '../../components/Question';
import ContainerPage from '../../components/ContainerPage';
import InformationContainer from '../../components/InformationContainer';

const Room = () => {
    const [admin] = useState(true);
    const [questions] = useState([
        "João",
        "João",
        "João",
    ]);

    return ( 
        <>
            <Header admin={admin} />
            <ContainerPage>

                {
                    questions.length === 0 ? (
                        <InformationContainer>
                            <img src="images/empty-questions.svg" alt="" />
                            <h2>Nenhuma pergunta por aqui</h2>
                            <span>
                                Entre em uma sala e comece a perguntar!
                            </span>
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