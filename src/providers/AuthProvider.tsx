import React, { createContext, useContext, ReactElement } from "react";
import hook from "./hooks/useAuth";

type Values = {
  handleLogin: (e: any) => void,
  handleLogout: () => void,
  authenticated: boolean,
  loading: boolean,
  expirySession: boolean,
  setExpirySession: (value: boolean) => void,
  buttonChildren: string | ReactElement,
  formValues: {},
  setFormValues: (value: { email: string, password: string }) => void
}

const defaultValues = {
  handleLogin: (e: any) => "",
  handleLogout: () => "",
  setExpirySession: () => "",
  loading: true,
  authenticated: false,
  expirySession: false,
  buttonChildren: "Login",
  formValues: {},
  setFormValues: () => {}
}

const AuthContext = createContext<Values>(defaultValues);

export const AuthProvider: React.FC = ({ children }) => {

  const {
    handleLogin, 
    handleLogout, 
    authenticated, 
    loading,
    expirySession, 
    setExpirySession, 
    buttonChildren, 
    formValues, 
    setFormValues
  } = hook();

  return (
    <AuthContext.Provider
      value={{
        handleLogin, 
        handleLogout, 
        authenticated, 
        loading,
        expirySession, 
        setExpirySession, 
        buttonChildren, 
        formValues, 
        setFormValues
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);