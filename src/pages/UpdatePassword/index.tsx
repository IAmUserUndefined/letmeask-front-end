import React, { ReactElement, useState } from "react";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import FormButton from "../../components/FormButton";
import LoadingGif from "../../components/LoadingGif";

import Form from "../../styles/form";

import api from "../../services/api";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const UpdatePassword = () => {
    const { handleShowModal } = useModal();
    const [formValues, setFormValues] = useState({});
    const [buttonChidren, setButtonChildren] = useState<string | ReactElement>("Atualizar Senha");

    const handleUpdatePassword = async (e: any) => {
        e.preventDefault();

        const { passwordCurrent, newPassword, newPasswordConfirm } = e.target;
    
        if (
          !passwordCurrent.value ||
          !newPassword.value ||
          !newPasswordConfirm.value
        )
          return handleShowModal("Preencha todos os campos");
    
        if (!isPasswordValid(passwordCurrent.value))
          return handleShowModal("Senha atual incorreta");
    
        const { result, message } = isPasswordValid(newPassword.value);
    
        if (!result) return handleShowModal(message);
    
        if (newPassword.value !== newPasswordConfirm.value)
          return handleShowModal("As senhas não coincidem");
    
        setButtonChildren(<LoadingGif />);
  
        await api
          .patch(`/user/password/update`, {
            passwordCurrent: passwordCurrent.value,
            newPassword: newPassword.value,
            newPasswordConfirm: newPasswordConfirm.value,
          })
          .then(({ data }) => {
            setFormValues({});
            handleShowModal(data.response);
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
              <Form onSubmit={handleUpdatePassword}>
                    <Logo />
                    
                    <h2>Atualizar Senha</h2>

                    <FormInput
                        type="password"
                        placeholder="Senha Atual"
                        name="passwordCurrent"
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormInput
                        type="password"
                        placeholder="Nova Senha"
                        name="newPassword"
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Nova Senha"
                        name="newPasswordConfirm"
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormButton type="submit">
                        {buttonChidren}
                    </FormButton>

                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/delete-user">Quer excluir sua conta?</Link>
                    <Link link="/create-room">Quer voltar à página inicial?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdatePassword;