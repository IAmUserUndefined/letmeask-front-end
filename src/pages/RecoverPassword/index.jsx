import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

const RecoverPassword = () => {
    return ( 
        <>
            <ContainerMain>
                <Form name="recoverPassword">
                    <Logo />
                    
                    <h2>Recuperação de Senha</h2>

                    <FormInput
                        type="password"
                        placeholder="Nova Senha"
                        name="password"
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Nova Senha"
                        name="passwordConfirm"
                    />

                    <FormButton>
                    Atualizar Senha
                    </FormButton>

                </Form>
            </ContainerMain>
        </>
    );
}
 
export default RecoverPassword;