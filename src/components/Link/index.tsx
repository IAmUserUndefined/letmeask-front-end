import React from 'react';
import { useNavigate } from "react-router-dom";

import LinkStyle from "./styles";

type LinkTypes = {
    link?: string,
    children: string,
    onClick?: () => void,
}

const Link = ({ children, link, onClick }: LinkTypes) => {
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