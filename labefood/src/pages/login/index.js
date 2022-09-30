import { LoginPageContainer } from "./style";
import logo from "../../components/assets/logo.svg";
import { EmailInput, PasswordInput } from "../../components/inputs";
import {
  Button,

} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "../../hooks/use-form";
import * as Coordinator from "../../routes/coordinator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectPage } from "../../hooks/useProtectPage";
import { BASE_URL, appName } from "../../constants/index.js";


export const LoginPage = () => {
  useProtectPage();
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, onChange, clearInputs] = useForm({
    email: "",
    password: "",
  });

  const onClick = () => navigate("/feed");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/${appName}/login`, form)
      .then((response) => {
        onClick();
        localStorage.setItem("token", response.data.token);
      })
      .catch((erro) => {
        console.log("Deu erro!");
        alert("Acesso invalido");
      });

    clearInputs();
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <LoginPageContainer>
      <img src={logo} alt="Logo da empresa" />
      <div className="title">
        <h2>Entrar</h2>
      </div>
      <form onSubmit={onSubmit}>
        <EmailInput
          isValid={isEmailValid}
          value={form.email}
          onChange={onChange}
        />

        <PasswordInput
          isValid={isPasswordValid}
          label={"Senha*"}
          placeholder={"Digite sua senha"}
          value={form.password}
          onChange={onChange}
          showPassword={showPassword}
          handleClick={onClickShowPassword}
          errorMessage={"Senha invalida"}
        />
        <Button
          type="submit"
          colorScheme="red"
          variant="solid"
          borderRadius="2px"
          height="2.625rem"
        >
          Entrar
        </Button>
        <Button
          onClick={() => Coordinator.goToSignUp(navigate)}
          colorScheme="black"
          variant="ghost"
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </form>
    </LoginPageContainer>
  );
};
