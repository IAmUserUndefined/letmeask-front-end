import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormLink from "../../components/FormLink";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

const Register = () => {
    return ( 
        <>
            <ContainerMain>
                <Form name="login">
                    <Logo />
                    
                    <FormInput type="email" name="email" placeholder="Email" />
                    <FormInput type="text" name="name" placeholder="Nome" />
                    <FormInput type="password" name="password" placeholder="Senha" />
                    <FormInput type="password" name="passwordConfirm" placeholder="Confirmação de Senha" />

                    <FormButton>
                        Cadastrar
                    </FormButton>

                    <FormLink link="/">Já tem um cadastro?</FormLink>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default Register;