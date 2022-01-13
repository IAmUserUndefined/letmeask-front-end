import React from 'react';
import { useNavigate } from "react-router-dom";

import LinkStyle from "./styles";

const Link = ({ children, link }) => {
    const navigate = useNavigate();
    const handleLink = () => navigate(link);

    return ( 
        <>
            <div>
                { children }
                <LinkStyle onClick={() => handleLink()}>
                    Clique aqui
                </LinkStyle>
            </div>
        </>
     );
}
 
export default Link;