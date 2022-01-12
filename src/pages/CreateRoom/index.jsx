import React from 'react';
import { useNavigate } from "react-router-dom";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

import Strong from './styles';

const CreateRoom = () => {
    const navigate = useNavigate();
    const handleLink = () => navigate("/enter-room");
    
    return ( 
        <>
            <ContainerMain>
                <Form name="login">
                    <Logo />
                    
                    <h2>Criar sala</h2>

                    <FormInput type="text" name="roomName" placeholder="Nome da Sala" />

                    <FormButton>
                        Criar Sala
                    </FormButton>

                    <span>
                        Quer entrar em uma sala já existente?
                        <Strong onClick={() => handleLink()}>Clique aqui</Strong>
                    </span>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default CreateRoom;