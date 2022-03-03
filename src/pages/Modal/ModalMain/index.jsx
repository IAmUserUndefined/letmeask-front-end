import React from "react";

import { 
          ModalStyle, 
          Button, 
          MessageModalMain 
        } from "../styles";

import { useModal } from "../../../providers/ModalProvider";

const Modal = () => {
  const { message } = useModal();

  return (
    <ModalStyle id="modal">
        <MessageModalMain id="message">{message}</MessageModalMain>
        <Button>Ok</Button>
    </ModalStyle>
  );
};

export default Modal;