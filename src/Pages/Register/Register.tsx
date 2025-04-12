import { Link } from "react-router-dom";
import cl from "./Register.module.scss";
import { useRegisterUserMutation } from "../../Shared/services/api/users/usersRegister";
import Button from "../../Shared/UI/button/Button";
import Input from "../../Shared/UI/input/Input";
import { useState } from "react";
import { IRegisterResponse } from "../../Shared/services/api/users/usersDto";

const Register = () => {
  const [formData, setFormData] = useState<IRegisterResponse>({
    name: "",
    email: "",
    avatar: "",
    password: "",
  });

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(formData);
    setFormData({ name: "", email: "", avatar: "", password: "" });
  };

  return (
    <div className={cl.form__wrap}>
      <h1 className={cl.title}>
        {isLoading ? <div>LOADING...</div> : "REGISTER"}
      </h1>

      <form onSubmit={handleSubmit} className={cl.form}>
        <div className={cl.input_wrap}>
          <p className={cl.input_name}>name</p>
          <Input
            type={"text"}
            name={"name"}
            value={formData.name}
            handleChange={handleChange}
          />
        </div>

        <div className={cl.input_wrap}>
          <p className={cl.input_name}>email</p>
          <Input
            type={"email"}
            name={"email"}
            value={formData.email}
            handleChange={handleChange}
          />
        </div>

        <div className={cl.input_wrap}>
          <p className={cl.input_name}>password</p>
          <Input
            type={"password"}
            name={"password"}
            value={formData.password}
            handleChange={handleChange}
          />
        </div>

        <div className={cl.input_wrap}>
          <p className={cl.input_name}>avatar</p>
          <Input
            type={"text"}
            name={"avatar"}
            value={formData.avatar}
            handleChange={handleChange}
          />
        </div>

        <div className={cl.input_wrap}>
          <Button>Submit</Button>
        </div>

        <div className={cl.content_wrap}>
          <p>
            You can{" "}
            <Link className={cl.link} to="/auth">
              click here
            </Link>{" "}
            if you have account
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
