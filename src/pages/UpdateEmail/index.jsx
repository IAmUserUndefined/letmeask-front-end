import React, { useState } from "react";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import FormButton from "../../components/FormButton";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import api from "../../services/api";
import isEmailValid from "../../utils/isEmailValid";

import { useModal } from "../../providers/ModalProvider";

const UpdateEmail = () => {
    const { handleShowModal } = useModal();
    const [buttonChidren, setButtonChildren] = useState("Atualizar Email");

    const handleUpdateEmail = async () => {
        setButtonChildren(<LoadingGif />);
    
        const form = document.forms.updateEmail;
    
        let { email } = form;
    
        if (!email.value) {
          setButtonChildren("Atualizar Email");
          return handleShowModal("Preencha o campo de email");
        }
    
        if (!isEmailValid(email.value)) {
          setButtonChildren("Atualizar Email");
          email.value = "";
          return handleShowModal("Coloque um email válido");
        }
    
        await api
          .post("/user/email/send-token-update-email", {
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
    
        setButtonChildren("Atualizar Email");
      };

    return ( 
        <>
            <ContainerMain>
                <Form name="updateEmail">
                    <Logo />
                    
                    <h2>Atualizar Email</h2>

                    <FormInput type="email" name="email" placeholder="Email" />

                    <FormButton onClick={() => handleUpdateEmail()}>
                        {buttonChidren}
                    </FormButton>

                    <Link link="/update-name">Quer atualizar seu nome?</Link>
                    <Link link="/update-password">Quer atualizar sua senha?</Link>
                    <Link link="/delete-user">Quer excluir sua conta?</Link>
                    <Link link="/create-room">Quer voltar à página inicial?</Link>
                </Form>
            </ContainerMain>
        </>
     );
}
 
export default UpdateEmail;