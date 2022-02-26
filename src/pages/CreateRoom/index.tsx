import React, { useState, useEffect, ReactElement } from 'react';
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
    const [formValues, setFormValues] = useState({});
    const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Criar Sala");
    const { handleShowModal } = useModal();
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const handleCreateRoom = async (e: any) => {
      
      e.preventDefault();
      
      let { roomName } = e.target;
      
      if (!roomName.value)
        return handleShowModal("Preencha todos os campos");
        
      setButtonChildren(<LoadingGif />);

      await api
        .post(`/room`, {
          name: roomName.value,
        })
        .then(({ data }) => {
          setFormValues({});
          navigate(`/room/${data.response}`);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor, tente novamente")
        );

        setButtonChildren("Criar Sala");
    };

    useEffect(() => {
      let mounted = true;

      const handleShowRoom = async () => {
        await api
        .get(`/room-code`)
        .then(({ data }) => {
          if(mounted)
            if(data.response) navigate(`/room/${data.response}`);
        })
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor, sua sala não pode ser acessada")
        );
      };

      handleShowRoom();

      return () => {
        mounted = false;
        return;
      }
    });

    return ( 
        <>
            <ContainerMain>
                <Form onSubmit={handleCreateRoom}>
                    <Logo />
                    
                    <h2>Criar sala</h2>

                    <FormInput 
                      type="text" 
                      name="roomName" 
                      placeholder="Nome da Sala" 
                      formValues={formValues} 
                      setFormValues={setFormValues} 
                    />

                    <FormButton type="submit">
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