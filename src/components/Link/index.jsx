import React from 'react';
import { useNavigate } from "react-router-dom";

import LinkStyle from "./styles";

const Link = ({ children, link, onClick }) => {
    const navigate = useNavigate();

    return ( 
        <>
            <div>
                { children }
                <LinkStyle onClick={
                    link ? () => navigate(link) : onClick
                }>
                    Clique aqui
                </LinkStyle>
            </div>
        </>
     );
}
 
export default Link;