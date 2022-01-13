import React from 'react';

import ContainerPageStyle from "./styles";

const ContainerPage = ({ children }) => {
    return ( 
        <>
            <ContainerPageStyle>
                { children }
            </ContainerPageStyle>
        </>
     );
}
 
export default ContainerPage;