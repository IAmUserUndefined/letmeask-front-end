import React from 'react';

import LogoImage from "../../assets/images/logo.svg";

const Logo = () => {
    return ( 
        <>
            <img src={LogoImage} alt="Logo da aplicação" style={{ width: "155px", height: "69px", marginBottom: "3rem" }} />
        </>
     );
}
 
export default Logo;