import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

const UpdatePassword = () => {
    return ( 
        <>
            <ContainerMain>
                <Form name="updateName">
                    <Logo />
                    
                    <h2>Excluir Usuário</h2>

                    <FormInput 
                        type="password" 
                        placeholder="Senha" 
                        name="password" 
                    
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Senha"
                        name="passwordConfirm"
                    />

                    <FormButton>
                        Excluir
                    </FormButton>

                    <Link link="/create-room">Gostaria de criar uma sala?</Link>
                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/update-password">Quer atualizar sua senha?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdatePassword;