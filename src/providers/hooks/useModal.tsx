import { useState } from "react";

const useModal = () => {
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("none");
  const [type, setType] = useState("");
  const [id, setId] = useState("");

  const handleShowModal = (message: string, type?: string, id?: string) => {
    setType(type || "");
    setMessage(message);
    setDisplay("flex");
    setId(id || "");
  }

  const handleCloseModal = (e: any) => {
    if (e.target.id !== "modal" && e.target.id !== "message") {
      setDisplay("none");
    }
  }

  return { message, display, type, id, handleShowModal, handleCloseModal }
}

export default useModal;