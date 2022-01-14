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

  const [buttonChildren, setButtonChildren] = useState("Enviar Email");
  const { handleShowModal } = useModal();

  const handleForgetPassword = async () => {
    setButtonChildren(<LoadingGif />);

    const form = document.forms.forgetPassword;

    let { email } = form;

    if (!email.value) {
      setButtonChildren("Enviar Email");
      return handleShowModal("Preencha o campo de email");
    }

    if (!isEmailValid(email.value)) {
      setButtonChildren("Enviar Email");
      email.value = "";
      return handleShowModal("Coloque um email válido");
    }

    await api
      .post("/user/password/send-token-password-recover", {
        email: email.value,
      })
      .then(({ data }) => {
        handleShowModal(data.response);
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    email.value = "";

    setButtonChildren("Enviar Email");
  };

    return ( 
        <>
            <ContainerMain>
                <Form name="forgetPassword">
                    <Logo />

                    <h2>Esqueci minha senha</h2>
                    
                    <FormInput type="email" name="email" placeholder="Email" />

                    <FormButton onClick={() => handleForgetPassword()}>
                        {buttonChildren}
                    </FormButton>

                    <FormLink link="/">Lembrou sua senha?</FormLink>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default Login;