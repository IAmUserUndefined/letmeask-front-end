import React, { createContext, useContext } from "react";
import hook from "./hooks/useModal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { message, display, type, handleShowModal, handleCloseModal } = hook();

  return (
    <ModalContext.Provider value={{ message, display, type, handleShowModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);