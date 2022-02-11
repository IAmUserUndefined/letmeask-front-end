import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormLinkStyle from './styles';

type LinkTypes = {
    link: string,
    children: string
}

const FormLink = ( { link, children }: LinkTypes ) => {
    const navigate = useNavigate();

    return ( 
        <>
            <div>
                <FormLinkStyle onClick={() => navigate(link)}>
                    { children }
                </FormLinkStyle>
            </div>
        </>
     );
}
 
export default FormLink;