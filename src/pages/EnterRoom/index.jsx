import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import ContainerMain from "../../components/ContainerMain";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Link from "../../components/Link";
import LoadingGif from "../../components/LoadingGif";

import Form from "../../styles/form";

import { useAuth } from "../../providers/AuthProvider";
import { useModal } from "../../providers/ModalProvider";

import api from "../../services/api";

const EnterRoom = () => {
    const { handleLogout } = useAuth();
    const { handleShowModal } = useModal();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [buttonChildren, setButtonChidren] = useState("Entra na Sala");
    const handleEnterRoom = async (e) => {
        e.preventDefault();
        const { roomCode } = e.target;

        if(!roomCode.value)
            return handleShowModal("Preencha o código da sala");

        setButtonChidren(<LoadingGif />);

        await api
        .get(`/room/${roomCode.value}`)
        .then(({ data }) => (
            data.response ? navigate(`/room/${roomCode.value}`) : handleShowModal("Essa sala não existe")
        ))
        .catch(({ response }) =>
            response
                ? handleShowModal(response.data.response)
                : handleShowModal("Erro no Servidor, tente novamente mais tarde")
        );

        setButtonChidren("Entra na Sala");
    }

    return ( 
        <>
            <ContainerMain>
                <Form onSubmit={handleEnterRoom}>
                    <Logo />

                    <h2>Entra na Sala</h2>
                    
                    <FormInput 
                        type="text" 
                        name="roomCode" 
                        placeholder="Código da Sala" 
                        formValues={formValues} 
                        setFormValues={setFormValues} 
                    />

                    <FormButton type="submit">
                        {buttonChildren}
                    </FormButton>

                    <Link link={"/create-room"}>
                        Quer criar uma sala?
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
 
export default EnterRoom;