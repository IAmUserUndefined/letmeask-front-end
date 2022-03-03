import React, { ReactElement } from 'react';

import InformationContainerStyle from "./styles";

type InformationContainerTypes = {
    children: ReactElement[];
}

const InformationContainer = ({ children }: InformationContainerTypes) => {
    return ( 
        <>
            <InformationContainerStyle>
                { children }
            </InformationContainerStyle>
        </>
     );
}

export default InformationContainer;