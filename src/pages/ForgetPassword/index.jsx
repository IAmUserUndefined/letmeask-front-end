import React, { useState } from "react";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormLink from "../../components/FormLink";
import FormButton from "../../components/FormButton";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";

import { useModal } from "../../providers/ModalProvider";

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [buttonChildren, setButtonChildren] = useState("Enviar Email");
  const { handleShowModal } = useModal();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    
    const { email } = e.target;

    if (!email.value) {
      return handleShowModal("Preencha o campo de email");
    }

    if (!isEmailValid(email.value)) {
      return handleShowModal("Coloque um email válido");
    }

    setButtonChildren(<LoadingGif />);

    await api
      .post("/user/password/send-token-password-recover", {
        email: email.value,
      })
      .then(({ data }) => {
        setFormValues({});
        handleShowModal(data.response);
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    setButtonChildren("Enviar Email");
  };

    return ( 
        <>
            <ContainerMain>
                <Form onSubmit={handleForgetPassword}>
                    <Logo />

                    <h2>Esqueci minha senha</h2>
                    
                    <FormInput 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      formValues={formValues} 
                      setFormValues={setFormValues} 
                    />

                    <FormButton type="submit">
                        {buttonChildren}
                    </FormButton>

                    <FormLink link="/">Lembrou sua senha?</FormLink>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default Login;