import React from 'react';

import InformationContainerStyle from "./styles";

const InformationContainer = ({ children }) => {
    return ( 
        <>
            <InformationContainerStyle>
                { children }
            </InformationContainerStyle>
        </>
     );
}
 
export default InformationContainer;