import React, { ReactElement } from "react";

import ButtonStyle from "./styles";

type ButtonTypes = {
  children: string | ReactElement,
  onClick?: () => void,
  type: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, onClick, type }: ButtonTypes) => {
  return (
    <div>
        <ButtonStyle onClick={onClick} type={type || "button"}>
          {children}
        </ButtonStyle>
    </div>
  );
};

export default Button;