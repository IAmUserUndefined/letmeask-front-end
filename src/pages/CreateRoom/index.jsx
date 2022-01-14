import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Link from "../../components/Link";

import Form from "../../styles/form";

import { useAuth } from "../../providers/AuthProvider";

const CreateRoom = () => {    

    const { handleLogout } = useAuth();

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

                    <Link link={"/enter-room"}>
                        Quer entrar em uma sala já existente?
                    </Link>

                    <Link link={"/my-questions"}>
                        Quer acessar suas perguntas?
                    </Link>

                    <Link link={"/update-email"}>
                        Quer acessar configurações do usuário?
                    </Link>

                    <Link onClick={() => handleLogout()}>
                        Quer sair de sua sessão?
                    </Link>
                    
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default CreateRoom;