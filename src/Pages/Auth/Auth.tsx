import { Link } from "react-router-dom";
import cl from "./Auth.module.scss";
import { useAuthUserMutation } from "../../Shared/services/api/users/usersRegister";
import Button from "../../Shared/UI/button/Button";
import Input from "../../Shared/UI/input/Input";
import { IAuthUser } from "../../Shared/services/api/users/usersDto";
import { useState } from "react";

const Auth = () => {
  const [authUser, { isLoading }] = useAuthUserMutation();
  const [formData, setFormData] = useState<IAuthUser>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authUser(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={cl.form__wrap}>
      <h1 className={cl.title}>{isLoading ? "LOADING..." : "AUTH"}</h1>

      <form className={cl.form} onSubmit={handleSubmit}>
        <div className={cl.input_wrap}>
          <p className={cl.input_name}>email</p>
          <Input
            type={"email"}
            name="email"
            value={formData.email}
            handleChange={handleChange}
          />
        </div>

        <div className={cl.input_wrap}>
          <p className={cl.input_name}>password</p>
          <Input
            type={"password"}
            name="password"
            value={formData.password}
            handleChange={handleChange}
          />
        </div>

        <div className={cl.input_wrap}>
          <Button>Auth</Button>
        </div>

        <div className={cl.content_wrap}>
          <p>
            You not have account?{" "}
            <Link className={cl.link} to="/register">
              click here
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Auth;
