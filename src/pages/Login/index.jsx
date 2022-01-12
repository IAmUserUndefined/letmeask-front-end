import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormLink from "../../components/FormLink";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

const Login = () => {
    return ( 
        <>
            <ContainerMain>
                <Form name="login">
                    <Logo />
                    
                    <FormInput type="email" name="email" placeholder="Email" />
                    <FormInput type="password" name="password" placeholder="Senha" />

                    <FormButton>
                        Login
                    </FormButton>

                    <FormLink link="/register">Ainda não tem um cadastro?</FormLink>
                    <FormLink link="/forget-password">Esqueceu sua senha?</FormLink>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default Login;