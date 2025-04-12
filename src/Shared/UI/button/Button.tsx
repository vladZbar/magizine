import cl from "./Button.module.scss";

interface BtnProps {
  children: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({ children }) => {
  return <button className={cl.btn}>{children}</button>;
};

export default Button;
