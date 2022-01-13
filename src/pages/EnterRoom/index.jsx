import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Link from "../../components/Link";

import Form from "../../styles/form";

const EnterRoom = () => {
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

                    <Link link={"/create-room"}>
                        Quer criar uma sala?
                    </Link>
                    
                    <Link link={"/config-user"}>
                        Acessar configurações do usuário?
                    </Link>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default EnterRoom;