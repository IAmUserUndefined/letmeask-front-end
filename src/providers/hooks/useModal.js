import { useState } from "react";

const useModal = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [display, setDisplay] = useState("none");
  const [id, setId] = useState("");

  const handleShowModal = (message, type, id) => {
    setType(type);
    setMessage(message);
    setDisplay("flex");
    setId(id);
  }

  const handleCloseModal = (e) => {
    if (e.target.id !== "modal" && e.target.id !== "message") {
      setDisplay("none");
    }
  }

  return { message, display, type, id, handleShowModal, handleCloseModal }
}

export default useModal;