import { LoginPageContainer } from "./style";
import logo from "../../assets/logo.svg";
import { FormContainer } from "../../components/styled-containers";
import { EmailInput, PasswordInput } from "../../components/inputs";
import { Button } from "@chakra-ui/react";

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <img src={logo} alt="Logo da empresa" />
      <div className="title">
        <span className="text">Entrar</span>
      </div>
      <FormContainer>
        <EmailInput isValid={true} />
        <PasswordInput isValid={true} />
        <Button colorScheme="red" variant="solid">
          Entrar
        </Button>
        <Button colorScheme="black" variant="ghost">
          Não possui cadastro? Clique aqui.
        </Button>
      </FormContainer>
    </LoginPageContainer>
  );
};
