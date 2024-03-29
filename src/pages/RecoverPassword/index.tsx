import React, { ReactElement, useState } from "react";
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
  const handleLink = (link: string) => navigate(link);
  const { handleShowModal } = useModal();
  const [formValues, setFormValues] = useState({});
  const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Atualizar Senha");

  const handleRecoverPassword = async (e: any) => {
    e.preventDefault();

    const { password, passwordConfirm } = e.target;

    if (!password.value || !passwordConfirm.value)
      return handleShowModal("Preencha todos os campos");

    const { result, message } = isPasswordValid(password.value);

    if (!result) return handleShowModal(message);

    setButtonChildren(<LoadingGif />);

    await api
      .patch(`/user/password/password-recover${search}`, {
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      })
      .then(({ data }) => {
        setFormValues({});
        handleShowModal(data.response);
        handleLink("/");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

    setButtonChildren("Atualizar Senha");
  };

    return ( 
        <>
            <ContainerMain>
                <Form onSubmit={handleRecoverPassword}>
                    <Logo />
                    
                    <h2>Recuperação de Senha</h2>

                    <FormInput
                        type="password"
                        placeholder="Nova Senha"
                        name="password"
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Nova Senha"
                        name="passwordConfirm"
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormButton type="submit">
                        {buttonChildren}
                    </FormButton>

                </Form>
            </ContainerMain>
        </>
    );
}
 
export default RecoverPassword;