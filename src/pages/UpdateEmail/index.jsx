import React from 'react';

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import FormButton from "../../components/FormButton";

import Form from "../../styles/form";

const UpdateEmail = () => {
    return ( 
        <>
            <ContainerMain>
                <Form name="updateEmail">
                    <Logo />
                    
                    <h2>Atualizar Email</h2>

                    <FormInput type="email" name="email" placeholder="Email" />

                    <FormButton>
                        Atualizar Email
                    </FormButton>

                    <Link link="/create-room">Gostaria de criar uma sala?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/update-password">Quer atualizar sua senha?</Link>
                    <Link link="/delete-user">Quer excluir sua conta?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdateEmail;