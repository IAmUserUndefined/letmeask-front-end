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
                <Form name="updatePassword">
                    <Logo />
                    
                    <h2>Atualizar Senha</h2>

                    <FormInput
                        type="password"
                        placeholder="Senha Atual"
                        name="passwordCurrent"
                    />

                    <FormInput
                        type="password"
                        placeholder="Nova Senha"
                        name="newPassword"
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Nova Senha"
                        name="newPasswordConfirm"
                    />

                    <FormButton>
                        Atualizar Senha
                    </FormButton>

                    <Link link="/create-room">Gostaria de criar uma sala?</Link>
                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/delete-user">Quer excluir sua conta?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdatePassword;