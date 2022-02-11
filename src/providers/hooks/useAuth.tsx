import { useState, useEffect, ReactElement } from "react";

import api, { CommonHeaderProperties } from "../../services/api";
import history from "../../services/history";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../ModalProvider";

import LoadingGif from "../../components/LoadingGif";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [expirySession, setExpirySession] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonChildren, setButtonChildren] = useState<string | ReactElement>("Login");
  const { handleShowModal } = useModal();
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("tokenLetmeAsk");
    const tokenExpirytime = localStorage.getItem("tokenExpiryLetmeAsk");

    if (token) {

      if(Date.now() < parseInt(tokenExpirytime || "0")) {
        setAuthenticated(true);
      }else{
        setExpirySession(false);
        handleLogout();
      }
      
    }
    setLoading(false);
  }, []);

  const handleLogin = async (e: any) => {

    e.preventDefault();

    const { email, password } = e.target;

    if (!email.value || !password.value)
      return handleShowModal("Preencha todos os campos");

    if (!isEmailValid(email.value))
      return handleShowModal("Email/Senha Incorreto(s)");

    const { result } = isPasswordValid(password.value);

    if (!result) 
      return handleShowModal("Email/Senha Incorreto(s)");

    setButtonChildren(<LoadingGif />);

    await api
      .post("/user/login", {
        email: email.value,
        password: password.value,
      })
      .then(({ data }) => {
        setFormValues({});
        setButtonChildren("Login");
        localStorage.setItem("tokenLetmeAsk", data.response);
        localStorage.setItem("tokenExpiryLetmeAsk", new Date().setHours(new Date().getHours() + 2).toString());
        api.defaults.headers = { "Authorization": `Bearer ${data.response}` } as CommonHeaderProperties;
        setAuthenticated(true);
        history.push("/tasks");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

      setButtonChildren("Login");
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("tokenLetmeAsk");
    localStorage.removeItem("tokenExpiryLetmeAsk");
    api.defaults.headers = { "Authorization": undefined } as CommonHeaderProperties;
  };

  return { 
    handleLogin, handleLogout, authenticated, loading, expirySession, setExpirySession, buttonChildren, formValues, setFormValues 
  };
};

export default useAuth;