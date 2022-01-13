import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

const UpdateName = () => {
    return ( 
        <>
            <ContainerMain>
                <Form name="updateName">
                    <Logo />
                    
                    <h2>Atualizar Nome</h2>

                    <FormInput type="text" name="name" placeholder="Nome" />

                    <FormButton>
                        Atualizar Nome
                    </FormButton>

                    <Link link="/create-room">Gostaria de criar uma sala?</Link>
                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-password">Quer atualizar sua senha?</Link>
                    <Link link="/delete-user">Quer excluir sua conta?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdateName;