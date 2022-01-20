import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormLink from "../../components/FormLink";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

import { useAuth } from "../../providers/AuthProvider";

const Login = () => {
    const { handleLogin, buttonChildren, formValues, setFormValues } = useAuth();

    return ( 
        <>
            <ContainerMain>
                <Form onSubmit={handleLogin}>
                    <Logo />
                    
                    <h2>Login</h2>

                    <FormInput 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        formValues={formValues} 
                        setFormValues={setFormValues} 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        formValues={formValues} 
                        setFormValues={setFormValues} 
                    />

                    <FormButton type="submit">
                        {buttonChildren}
                    </FormButton>

                    <FormLink link="/register">Ainda não tem um cadastro?</FormLink>
                    <FormLink link="/forget-password">Esqueceu sua senha?</FormLink>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default Login;