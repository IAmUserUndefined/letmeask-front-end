import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Link from "../../components/Link";

import Form from "../../styles/form";

const CreateRoom = () => {    
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

                    <Link link={"/config-user"}>
                        Acessar configurações do usuário?
                    </Link>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default CreateRoom;