import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { HeaderContainer, NavigationContainer, LogoContainer, HeaderButton, CodeRoomCopy, IconMenu } from "./styles";

import Logo from "../../assets/images/logo.svg";
import Copy from "../../assets/images/copy.svg";

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Header = ({ admin }) => {
    const { code } = useParams();
    const navigate = useNavigate();
    const handleLink = (link) => navigate(link);
    const { pathname } = useLocation();
    const copyRoomCodeToClipboard = () => navigator.clipboard.writeText(code);
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
                    <img src={Logo} alt="Logo da Aplicação" />
                </LogoContainer>
                <IconMenu>
                    {icon}
                </IconMenu>
                <NavigationContainer left={left}>
                    <ul>

                        {                        
                            pathname !== "/my-questions" ? (<li>
                                <CodeRoomCopy onClick={() => copyRoomCodeToClipboard()}>
                                    <span>
                                        <img src={Copy} alt="Símbolo de Copia e Cola" />
                                    </span>
                                    <span>
                                        <strong>Sala {code}</strong>
                                    </span>
                                </CodeRoomCopy>
                            </li>) : null
                        }

                        {
                            admin && pathname !== "/my-questions" ? (
                                <li>
                                    <HeaderButton>
                                        Encerrar Sala
                                    </HeaderButton>
                                </li>
                            ) :
                            (
                                <li>
                                    <HeaderButton onClick={() => handleLink(`/room/${code}`)}>
                                        Voltar a minha sala
                                    </HeaderButton>
                                </li>
                            )
                        }
                        <li>
                            <HeaderButton onClick={() => handleLink("/my-questions")}>
                                Minhas Perguntas
                            </HeaderButton>
                        </li>
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