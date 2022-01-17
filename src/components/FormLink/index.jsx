import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormLinkStyle from './styles';

const FormLink = ( { link, children } ) => {
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