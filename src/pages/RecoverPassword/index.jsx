import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import api from "../../services/api";

import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const RecoverPassword = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const handleLink = (link) => navigate(link);
  const { handleShowModal } = useModal();
  const [buttonChildren, setButtonChildren] = useState("Atualizar Senha");

  const handleRecoverPassword = async () => {
    setButtonChildren(<LoadingGif />);

    const form = document.forms.recoverPassword;

    let { password, passwordConfirm } = form;

    if (!password.value || !passwordConfirm.value) {
      setButtonChildren("Atualizar Senha");
      return handleShowModal("Preencha todos os campos");
    }

    const { result, message } = isPasswordValid(password.value);

    if (!result) {
      password.value = "";
      passwordConfirm.value = "";
      return handleShowModal(message);
    }

    await api
      .patch(`/user/password/password-recover${search}`, {
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      })
      .then(({ data }) => {
        handleShowModal(data.response);
        handleLink("/");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    password.value = "";
    passwordConfirm.value = "";

    setButtonChildren("Atualizar Senha");
  };

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

                    <FormButton onClick={() => handleRecoverPassword()}>
                        {buttonChildren}
                    </FormButton>

                </Form>
            </ContainerMain>
        </>
    );
}
 
export default RecoverPassword;