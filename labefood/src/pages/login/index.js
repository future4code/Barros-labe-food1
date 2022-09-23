import { LoginPageContainer } from "./style";
import logo from "../../components/assets/logo.svg";
import { EmailInput, PasswordInput } from "../../components/inputs";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  IconButton,
  Box,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "../../hooks/use-form";

import * as Coordinator from "../../routes/coordinator";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectPage } from "../../hooks/useProtectPage";
import { BASE_URL, appName } from "../../constants/index.js";
import { SignupContainer } from "../signup/SignupStyled";

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
        console.log(response.data);
        onClick();
        localStorage.setItem("token", response.data.token);
      })
      .catch((erro) => {
        console.log("Deu erro!");
        alert("Acesso invalido");
      });

    clearInputs();
  };
  // console.log(form);
  // setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
  // setIsPasswordValid(/.{6,}/.test(form.password))
  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //email:astrodev@future4.com senha:123456
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
          label={"Senha"}
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
    // <LoginPageContainer>
    //   <img src={logo} alt="Logo da empresa" />
    //   <div className="title">
    //     <span className="text">Entrar</span>
    //   </div>
    //   <img src={logo} alt="Logo da empresa" />
    //   <div className="title">
    //     <span className="text">Entrar</span>
    //   </div>
    //   <form onSubmit={onSubmit}>
    //     <Box p={0}>
    //       <EmailInput
    //         isValid={isEmailValid}
    //         value={form.email}
    //         onChange={onChange}
    //       />
    //       {/* <FormControl
    //         marginBottom="1rem"
    //         variant="floating"
    //         id="email"
    //         isInvalid={!isEmailValid}
    //       >
    //         <Input
    //           name="email"
    //           type="email"
    //           value={form.email}
    //           onChange={onChange}
    //           placeholder=""
    //           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    //           required
    //         />
    //         <FormLabel>E-mail</FormLabel>
    //         {!isEmailValid ? (
    //           <FormErrorMessage as="p">E-mail inválido.</FormErrorMessage>
    //         ) : undefined}
    //       </FormControl> */}
    //       <FormControl
    //         paddingBottom="1rem"
    //         variant="floating"
    //         id="password"
    //         isInvalid={!isPasswordValid}
    //       >
    //         <InputGroup size="md">
    //           <Input
    //             name="password"
    //             value={form.password}
    //             onChange={onChange}
    //             pr="4.5rem"
    //             type={showPassword ? "text" : "password"}
    //             placeholder=""
    //             pattern="^.{6}"
    //             required
    //           />
    //           <FormLabel>Senha</FormLabel>
    //           <InputRightElement right="-10px" top="7px" width="3rem">
    //             <button
    //               h="1.75rem"
    //               size="3rm"
    //               onClick={onClickShowPassword}
    //               type="button"
    //             >
    //               {showPassword ? <FaEyeSlash /> : <FaEye />}
    //             </button>
    //           </InputRightElement>
    //         </InputGroup>
    //         {!isPasswordValid ? (
    //           <FormHelperText as="p">E-mail inválido.</FormHelperText>
    //         ) : undefined}
    //       </FormControl>
    //       <Button type="submit" colorScheme="red" variant="solid">
    //         Entrar
    //       </Button>
    //       <Button
    //         onClick={() => Coordinator.goToSignUp(navigate)}
    //         colorScheme="black"
    //         variant="ghost"
    //       >
    //         Não possui cadastro? Clique aqui.
    //       </Button>
    //     </Box>
    //   </form>
    // </LoginPageContainer>
  );
};
