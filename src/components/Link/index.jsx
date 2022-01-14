import React from 'react';
import { useNavigate } from "react-router-dom";

import LinkStyle from "./styles";

const Link = ({ children, link, onClick }) => {
    const navigate = useNavigate();
    const handleLink = () => navigate(link);

    return ( 
        <>
            <div>
                { children }
                <LinkStyle onClick={
                    link ? () => handleLink() : onClick
                }>
                    Clique aqui
                </LinkStyle>
            </div>
        </>
     );
}
 
export default Link;