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
import { useAuth } from "../../providers/AuthProvider";

const DeleteUser = () => {
    const { handleShowModal } = useModal();
    const { handleLogout } = useAuth();
    const [buttonChidren, setButtonChildren] = useState("Excluir Usuário");

    const handleDeleteUser = async () => {
        setButtonChildren(<LoadingGif />);
    
        const form = document.forms.deleteUser;
    
        let { password, passwordConfirm } = form;
    
        if (!password.value || !passwordConfirm.value) {
          setButtonChildren("Excluir Usuário");
          return handleShowModal("Preencha todos os campos");
        }
    
        const { result } = isPasswordValid(password.value);
    
        if (!result) {
          setButtonChildren("Excluir Usuário");
          password.value = "";
          passwordConfirm.value = "";
          return handleShowModal("Senha incorreta");
        }
    
        if (password.value !== passwordConfirm.value) {
          setButtonChildren("Excluir Usuário");
          password.value = "";
          passwordConfirm.value = "";
          return handleShowModal("As senhas não coincidem");
        }
    
        await api
          .delete(`/user/delete`, {
            data: {
              password: password.value,
              passwordConfirm: passwordConfirm.value,
            },
          })
          .then(({ data }) => {
            handleLogout();
            handleShowModal(data.response);
          })
          .catch(({ response }) =>
            response
              ? handleShowModal(response.data.response)
              : handleShowModal("Erro no Servidor")
          );
    
        password.value = "";
        passwordConfirm.value = "";
    
        setButtonChildren("Excluir Usuário");
      };

    return ( 
        <>
            <ContainerMain>
                <Form name="deleteUser">
                    <Logo />
                    
                    <h2>Excluir Usuário</h2>

                    <FormInput 
                        type="password" 
                        placeholder="Senha" 
                        name="password" 
                    
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Senha"
                        name="passwordConfirm"
                    />

                    <FormButton onClick={() => handleDeleteUser()}>
                        {buttonChidren} 
                    </FormButton>

                    <Link link="/create-room">Gostaria de criar uma sala?</Link>
                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/update-password">Quer atualizar sua senha?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default DeleteUser;