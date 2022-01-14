import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Link from "../../components/Link";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import { useAuth } from "../../providers/AuthProvider";
import { useModal } from "../../providers/ModalProvider";

import api from "../../services/api";

const CreateRoom = () => {    
    const [buttonChildren, setButtonChildren] = useState("Criar Sala");
    const { handleShowModal } = useModal();
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const handleLink = (link) => navigate(link);

    const handleCreateRoom = async () => {
      setButtonChildren(<LoadingGif />);
  
      const form = document.forms.createRoom;
  
      let { roomName } = form;
  
      if (!roomName.value) {
        setButtonChildren("Criar Sala");
        return handleShowModal("Preencha todos os campos");
      }
  
      await api
        .post(`/room`, {
          name: roomName.value,
        })
        .then(({ data }) => {
          roomName.value = "";
          setButtonChildren("Criar Sala");
          handleLink(`/room/${data.response}`);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    };

    useEffect(() => {
      const handleShowRoom = async () => {
        await api
        .get(`/room-code`)
        .then(({ data }) => {
          if(data.response) handleLink(`/room/${data.response}`);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
      };
      handleShowRoom();
    });

    return ( 
        <>
            <ContainerMain>
                <Form name="createRoom">
                    <Logo />
                    
                    <h2>Criar sala</h2>

                    <FormInput type="text" name="roomName" placeholder="Nome da Sala" />

                    <FormButton onClick={() => handleCreateRoom()}>
                        {buttonChildren}
                    </FormButton>

                    <Link link={"/enter-room"}>
                        Quer entrar em uma sala já existente?
                    </Link>

                    <Link link={"/my-questions"}>
                        Quer acessar suas perguntas?
                    </Link>

                    <Link link={"/update-email"}>
                        Quer acessar configurações do usuário?
                    </Link>

                    <Link onClick={() => handleLogout()}>
                        Quer sair de sua sessão?
                    </Link>
                    
                </Form>
            </ContainerMain>
        </>
    );
}
 
export default CreateRoom;