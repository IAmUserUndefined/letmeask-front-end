import React, { createContext, useContext } from "react";
import hook from "./hooks/useModal";

type Values = {
  message: string,
  display: string,
  handleShowModal: (message: string, type?: string, id?: string) => void,
  handleCloseModal: (e: any) => void,
  type: string,
  id: string
}

const defaultValues = {
  message: "",
  display: "none",
  handleShowModal: () => "",
  handleCloseModal: () => "",
  type: "",
  id: ""
}

const ModalContext = createContext<Values>(defaultValues);

export const ModalProvider: React.FC = ({ children }) => {
  const { message, display, type, id, handleShowModal, handleCloseModal } = hook();

  return (
    <ModalContext.Provider value={{ message, display, type, id, handleShowModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);