import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { HeaderContainer, NavigationContainer, LogoContainer, HeaderButton, CodeRoomCopy, IconMenu } from "./styles";

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Header = ({ admin }) => {
    const navigate = useNavigate();
    const handleLink = (link) => navigate(link);
    const copyRoomCodeToClipboard = (code) => navigator.clipboard.writeText(code);
    const [left, setLeft] = useState(`${-1000}px`);
    const [icon, setIcon] = useState(<AiOutlineMenu onClick={() => showMenu()} />)
    const showMenu = () => {
        setIcon(<AiOutlineCloseCircle onClick={() => {
            setIcon(<AiOutlineMenu onClick={() => showMenu()} />);
            setLeft(`${-1000}px`);
        }} />);
        setLeft(0);
    };

    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <img src="images/logo.svg" alt="Logo da Aplicação" />
                </LogoContainer>
                <IconMenu>
                    {icon}
                </IconMenu>
                <NavigationContainer left={left}>
                    <ul>
                        <li>
                            <CodeRoomCopy onClick={() => copyRoomCodeToClipboard("#323243")}>
                                <span>
                                    <img src="images/copy.svg" alt="Símbolo de Copia e Cola" />
                                </span>
                                <span>
                                    <strong>Sala #323243</strong>
                                </span>
                            </CodeRoomCopy>
                        </li>
                        {
                            admin ? (
                                <li>
                                    <HeaderButton>
                                        Encerrar Sala
                                    </HeaderButton>
                                </li>
                            ) : null
                        }
                        <li>
                            <HeaderButton onClick={() => handleLink("/update-email")}>
                                Configurações do Usuário
                            </HeaderButton>
                        </li>
                        <li>
                            <HeaderButton onClick={() => handleLink("/")}>
                                Sair
                            </HeaderButton>
                        </li>
                    </ul>
                </NavigationContainer>
            </HeaderContainer>
        </>
     );
}
 
export default Header;