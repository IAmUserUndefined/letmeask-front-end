import React, { ReactElement } from 'react';

import ContainerBigGifStyle from './styles';

type ContainerBigGifTypes = {
    children: ReactElement;
}

const ContainerBigGif = ({ children }: ContainerBigGifTypes) => {
    return <ContainerBigGifStyle> { children } </ContainerBigGifStyle>
}
 
export default ContainerBigGif;