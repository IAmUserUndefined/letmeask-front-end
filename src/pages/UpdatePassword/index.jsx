import React, { useState } from "react";

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
    const [buttonChidren, setButtonChildren] = useState("Atualizar Senha");

    const handleUpdatePassword = async () => {
        setButtonChildren(<LoadingGif />);
    
        const form = document.forms.updatePassword;
    
        let { passwordCurrent, newPassword, newPasswordConfirm } = form;
    
        if (
          !passwordCurrent.value ||
          !newPassword.value ||
          !newPasswordConfirm.value
        ) {
          setButtonChildren("Atualizar Senha");
          return handleShowModal("Preencha todos os campos");
        }
    
        if (!isPasswordValid(passwordCurrent.value)) {
          setButtonChildren("Atualizar Senha");
          passwordCurrent.value = "";
          newPassword.value = "";
          newPasswordConfirm = "";
          return handleShowModal("Senha atual incorreta");
        }
    
        const { result, message } = isPasswordValid(newPassword.value);
    
        if (!result) {
          setButtonChildren("Atualizar Senha");
          return handleShowModal(message);
        }
    
        if (newPassword.value !== newPasswordConfirm.value) {
          passwordCurrent.value = "";
          newPassword.value = "";
          newPasswordConfirm = "";
          return handleShowModal("As senhas não coincidem");
        }
    
        await api
          .patch(`/user/password/update`, {
            passwordCurrent: passwordCurrent.value,
            newPassword: newPassword.value,
            newPasswordConfirm: newPasswordConfirm.value,
          })
          .then(({ data }) => {
            handleShowModal(data.response);
          })
          .catch(({ response }) =>
            response
              ? handleShowModal(response.data.response)
              : handleShowModal("Erro no Servidor")
          );
    
        passwordCurrent.value = "";
        newPassword.value = "";
        newPasswordConfirm.value = "";
    
        setButtonChildren("Atualizar Senha");
      };

    return ( 
        <>
            <ContainerMain>
                <Form name="updatePassword">
                    <Logo />
                    
                    <h2>Atualizar Senha</h2>

                    <FormInput
                        type="password"
                        placeholder="Senha Atual"
                        name="passwordCurrent"
                    />

                    <FormInput
                        type="password"
                        placeholder="Nova Senha"
                        name="newPassword"
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Nova Senha"
                        name="newPasswordConfirm"
                    />

                    <FormButton onClick={() => handleUpdatePassword()}>
                        {buttonChidren}
                    </FormButton>

                    <Link link="/create-room">Gostaria de criar uma sala?</Link>
                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/delete-user">Quer excluir sua conta?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdatePassword;