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
            <Form name="forgetPassword">
                <Logo />
                
                <FormInput type="email" name="email" placeholder="Email" />

                <FormButton>
                    Enviar Email
                </FormButton>

                <FormLink link="/">Lembrou sua senha?</FormLink>
            </Form>
            </ContainerMain>
        </>
    );
}
 
export default Login;