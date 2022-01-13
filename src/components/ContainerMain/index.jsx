import React from 'react';

import ContainerMainStyle from "./styles";

import Illustration from "../../assets/images/illustration.svg";

const ContainerMain = ({ children }) => {
    return ( 
        <>
            <ContainerMainStyle>
                <div>
                    <img src={Illustration} alt="Ilustração" />
                    <h1>Toda pergunta tem uma resposta.</h1>
                    <span>Aprenda e compartilhe conhecimento com outras pessoas</span>
                </div>
                <div>
                    { children }
                </div>
            </ContainerMainStyle>
        </>
     );
}
 
export default ContainerMain;