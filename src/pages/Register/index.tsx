import React, { ReactElement, useState } from "react";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormLink from "../../components/FormLink";
import FormButton from "../../components/FormButton";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const Register = () => {
    const { handleShowModal } = useModal();
    const [formValues, setFormValues] = useState({});
    const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Cadastrar");
  
    const handleRegister = async (e: any) => {
      e.preventDefault();

      const { email, name, password, passwordConfirm } = e.target;
  
      if (!email.value || !name.value || !password.value || !passwordConfirm.value)
        return handleShowModal("Preencha todos os campos");
  
      if (!isEmailValid(email.value))
        return handleShowModal("Coloque um email válido");
  
      const { result, message } = isPasswordValid(password.value);
  
      if (!result) return handleShowModal(message);
  
      if (password.value !== passwordConfirm.value)
        return handleShowModal("As senhas não coincidem");
  
      setButtonChildren(<LoadingGif />);
  
      await api
        .post("/user/create", {
          email: email.value,
          name: name.value,
          password: password.value,
          passwordConfirm: passwordConfirm.value,
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
  
      setButtonChildren("Cadastrar");
    };

    return ( 
        <>
            <ContainerMain>
              <Form onSubmit={handleRegister}>
                    <Logo />

                    <h2>Cadastrar</h2>
                    
                    <FormInput 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      formValues={formValues}
                      setFormValues={setFormValues}
                    />
                    <FormInput 
                      type="text" 
                      name="name" 
                      placeholder="Nome" 
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
                    <FormInput
                      type="password"
                      name="passwordConfirm"
                      placeholder="Confirmação de Senha"
                      formValues={formValues}
                      setFormValues={setFormValues}
                    />

                    <FormButton type="submit">
                        {buttonChildren}
                    </FormButton>

                    <FormLink link="/">Já tem um cadastro?</FormLink>
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default Register;