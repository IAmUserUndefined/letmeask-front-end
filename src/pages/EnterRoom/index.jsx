import React from 'react';
import { useNavigate } from "react-router-dom";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

import Strong from './styles';

const EnterRoom = () => {
    const navigate = useNavigate();
    const handleLink = () => navigate("/create-room");
    
    return ( 
        <>
            <ContainerMain>
                <Form name="login">
                    <Logo />

                    <h2>Entra em uma sala</h2>
                    
                    <FormInput type="text" name="roomName" placeholder="Código da Sala" />

                    <FormButton>
                        Entrar na Sala
                    </FormButton>

                    <span>
                        Quer criar uma sala?
                        <Strong onClick={() => handleLink()}>Clique aqui</Strong>
                    </span>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default EnterRoom;