import React from 'react';

import { ContainerQuestion, ContentQuestion, ContainerResponse, Footer } from './styles';

import { MdOutlineDelete, MdOutlineQuestionAnswer } from "react-icons/md";

const Question = ({ admin, response }) => {
    return ( 
        <>
            <ContainerQuestion>
                <ContentQuestion>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Qui dolorem quaerat architecto consequatur, saepe a, cup
                    iditate nisi quidem, itaque molestiae quasi optio. Placeat, 
                    provident nesciunt quaerat animi explicabo quisquam commodi?
                </ContentQuestion>
                <Footer>
                    <div>
                        <strong>
                            João Pedro
                        </strong>
                    </div>
                    <div>
                        {
                            admin ? <MdOutlineQuestionAnswer /> : null
                        }
                        {
                            admin ? <MdOutlineDelete /> : null
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