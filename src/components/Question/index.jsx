import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { ContainerQuestion, ContentQuestion, ContainerResponse, Footer } from './styles';

import { MdOutlineDelete, MdOutlineQuestionAnswer } from "react-icons/md";

import api from "../../services/api";

const Question = ({ admin, userId, question, response  }) => {
    const { pathname } = useLocation();
    const [name, setName] = useState("");

    useEffect(() => {

        let mounted = true;

        const fetchName = async () => {
            await api
            .post("/get-name", {
                userId: userId,
              })
            .then(({ data }) => (mounted ? setName(data.response) : null))
            .catch(({ response }) =>
                response === undefined ? console.log("Erro no servidor") : null
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
                            admin && pathname !== "/my-questions" ? <MdOutlineQuestionAnswer /> : null
                        }
                        {
                            admin && pathname !== "/my-questions" ? <MdOutlineDelete /> : null
                        }
                        {
                            pathname === "/my-questions" ? <MdOutlineDelete /> : null
                        }
                    </div>
                </Footer>
                {
                    response ? (
                        <ContainerResponse>
                            Resposta: {response}
                        </ContainerResponse>
                    ) : null
                }
            </ContainerQuestion>
        </>
     );
}
 
export default Question;