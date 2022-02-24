import React, { ReactElement } from "react";

import ButtonStyle from "./styles";

type FormButtonTypes = {
  children: string | ReactElement,
  type: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

const FormButton = ({ children, type, onClick }: FormButtonTypes) => {
  return (
    <div>
        <ButtonStyle onClick={onClick} type={type || "button"}>
          {children}
        </ButtonStyle>
    </div>
  );
};

export default FormButton;