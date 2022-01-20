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
    const [formValues, setFormValues] = useState({});
    const [buttonChidren, setButtonChildren] = useState("Excluir Usuário");

    const handleDeleteUser = async (e) => {
      e.preventDefault();

      const { password, passwordConfirm } = e.target;
  
      if (!password.value || !passwordConfirm.value)
        return handleShowModal("Preencha todos os campos");
  
      const { result } = isPasswordValid(password.value);
  
      if (!result) return handleShowModal("Senha incorreta");
  
      if (password.value !== passwordConfirm.value)
        return handleShowModal("As senhas não coincidem");
  
        setButtonChildren(<LoadingGif />);
    
        await api
          .delete(`/user/delete`, {
            data: {
              password: password.value,
              passwordConfirm: passwordConfirm.value,
            },
          })
          .then(({ data }) => {
            setFormValues({});
            handleLogout();
            handleShowModal(data.response);
          })
          .catch(({ response }) =>
            response
              ? handleShowModal(response.data.response)
              : handleShowModal("Erro no Servidor, tente novamente mais tarde")
          );
    
        setButtonChildren("Excluir Usuário");
      };

    return ( 
        <>
            <ContainerMain>
              <Form onSubmit={handleDeleteUser}>
                    <Logo />
                    
                    <h2>Excluir Usuário</h2>

                    <FormInput 
                        type="password" 
                        placeholder="Senha" 
                        name="password" 
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormInput
                        type="password"
                        placeholder="Confirmação de Senha"
                        name="passwordConfirm"
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />

                    <FormButton type="submit">
                        {buttonChidren} 
                    </FormButton>

                    <Link link="/update-email">Quer atualizar seu email?</Link>
                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/update-password">Quer atualizar sua senha?</Link>
                    <Link link="/create-room">Quer voltar à página inicial?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default DeleteUser;