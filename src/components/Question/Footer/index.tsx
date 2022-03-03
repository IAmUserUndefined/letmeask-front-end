import React, { useEffect, useState } from 'react';
import { MdOutlineDelete, MdOutlineQuestionAnswer } from "react-icons/md";

import FooterStyle from './styles';

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

import { QuestionTypes } from "../../../types/index";

type FooterTypes = {
    question: QuestionTypes;
    admin: boolean | undefined;
    handleShowResponseField: () => void;
}

const Footer = ({ question, admin, handleShowResponseField }: FooterTypes) => {
    const { response, id, userId, } = question;
    const { handleShowModal } = useModal();
    const [username, setUsername] = useState("");
    const handleDeleteQuestion = async () => handleShowModal("", "question", id);

    useEffect(() => {

        let mounted = true;

        const fetchName = async () => {
            await api
            .post("/get-name", {
                userId: userId,
              })
            .then(({ data }) => (mounted ? setUsername(data.response) : null))
            .catch(() =>
                console.log("Erro no servidor")
            );
        };
  
        fetchName();

      return () => {
        mounted = false;
        return;
      }

    }, [userId]);

    return (
        <FooterStyle>
            <div>
                <strong>
                    {username}
                </strong>
            </div>
            <div>
                {
                    admin && !response 
                        ? (
                            <>
                                <MdOutlineQuestionAnswer onClick={() => handleShowResponseField()} />
                                <MdOutlineDelete onClick={() => handleDeleteQuestion()} />
                            </>
                          ) 
                            :  <MdOutlineDelete onClick={() => handleDeleteQuestion()} />
                }
            </div>
        </FooterStyle>
    );
}

export default Footer;