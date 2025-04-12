import cl from "./Input.module.scss";

interface Inp {
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Inp> = ({ type, name, value, handleChange }) => {
  return (
    <input
      className={cl.inp}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
