import React, { useState } from 'react';

import { ContainerQuestion, ContentQuestion, ContainerResponse } from './styles';

import { QuestionTypes } from "../../types/index";

import Footer from "./Footer";
import ContainerResponseField from "./ContainerResponseField";

type QuestionComponentTypes = {
    question: QuestionTypes;
    admin?: boolean | undefined;
}

const QuestionComponent = ({ question, admin }: QuestionComponentTypes) => {
    const { name, response } = question;    
    const [display, setDisplay] = useState("none");
    const handleShowResponseField = () => setDisplay("block");
    const handleCloseResponseField = () => setDisplay("none");
    
    return ( 
        <>
            <ContainerQuestion>
                <ContentQuestion>
                        {name}
                </ContentQuestion>
                <Footer 
                    question={question}
                    admin={admin}
                    handleShowResponseField={handleShowResponseField} 
                />
                {
                    response ? (
                        <ContainerResponse>
                            {response}
                        </ContainerResponse>
                    ) : null
                }
                <ContainerResponseField 
                    question={question} 
                    display={display} 
                    handleCloseResponseField={handleCloseResponseField} 
                />
            </ContainerQuestion>
        </>
     );
}
 
export default QuestionComponent;