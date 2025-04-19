import React from "react";
import cl from "./Button.module.scss";

interface BtnProps {
  children: React.ReactNode;
  clickHandler?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<BtnProps> = ({ children, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={cl.btn}>
      {children}
    </button>
  );
};

export default Button;
