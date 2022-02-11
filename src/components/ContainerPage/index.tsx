import React from 'react';

import ContainerPageStyle from "./styles";

type ContainerPageTypes = {
    children: any;
}

const ContainerPage = ({ children }: ContainerPageTypes) => {
    return ( 
        <>
            <ContainerPageStyle>
                { children }
            </ContainerPageStyle>
        </>
     );
}
 
export default ContainerPage;