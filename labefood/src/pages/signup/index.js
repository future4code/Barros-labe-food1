import LogoInvert from "../../img/logo-future-eats-invert.png";
import { SignupContainer } from "./SignupStyled";
import { useForm } from "../../hooks/use-form";
import { useState } from "react";
import axios from "axios";
import * as Coordinator from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, onChange, clearInputs] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  //--- Estados com valores booleanos para a validação do dados preenchidos no form
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCpfValid, setIsCpfValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  //--- Estados para confirmação de senha, não vai para a requisição
  const [isPasswordConfirmValid, setPasswordConfirmaValid] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //---Lógica para o 'olho' da senha
  const [showPassword, setShowPassword] = useState(true); //primeira senha
  const handleClickEye = () => setShowPassword(!showPassword);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true); //segunda senha
  const handleClickEyeConfirm = () => setShowPasswordConfirm(!showPasswordConfirm)

  const handleSubmit = (event) => {
    event.preventDefault();
    //--- Testes de validação que retorna booleanos para usar nas mensagens de erro do form control...
    setIsEmailValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email));
    setIsNameValid(/[A-Z][a-z]* [A-Z][a-z]{2,}$/.test(form.name));
    setIsCpfValid(
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(
        form.cpf
      )
    );
    setIsPasswordValid(/^[0-9]{6,8}$/.test(form.password));
    setPasswordConfirmaValid(passwordConfirm === form.password ? true : false);

    //--- Requisição para criar um novo cadastro
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/signup`,
        form
      )
      .then((response) => {
        console.log(response);
        Coordinator.goToAdressRegistration(navigate);
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <SignupContainer>
      <button
        className="go-back-button"
        onClick={() => Coordinator.goBack(navigate)}
      >
        <FiChevronLeft />
      </button>
      <img src={LogoInvert} alt="logo da Future Eats" />
      <h2>Cadastrar</h2>

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!isNameValid}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            value={form.name}
            onChange={onChange}
            size="lg"
            required
          />
          {!isNameValid ? (
            <FormErrorMessage as="p">
              Atenção: Nome e sobrenome
            </FormErrorMessage>
          ) : undefined}
        </FormControl>

        <FormControl isInvalid={!isEmailValid}>
          <FormLabel>E mail</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="email@email.com"
            value={form.email}
            onChange={onChange}
            size="lg"
            required
          />
          {!isEmailValid ? (
            <FormErrorMessage as="p">Email inválido.</FormErrorMessage>
          ) : undefined}
        </FormControl>

        <FormControl isInvalid={!isCpfValid}>
          <FormLabel>CPF</FormLabel>
          <Input
            type="number"
            name="cpf"
            placeholder="000.000.000-00"
            value={form.cpf}
            onChange={onChange}
            size="lg"
            required
          />
          {!isCpfValid ? (
            <FormErrorMessage as="p">Número de CPF inválido.</FormErrorMessage>
          ) : undefined}
        </FormControl>

        <FormControl isInvalid={!isPasswordValid}>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="lg">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mínimo 6 caracteres"
              value={form.password}
              onChange={onChange}
              size="lg"
            />
            <InputRightElement height="100%" width="4.5rem">
              <Button background="none" h="1.75rem" size="lg" onClick={handleClickEye}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isPasswordValid ? (
            <FormErrorMessage as="p">
              Formato de senha inválido.
            </FormErrorMessage>
          ) : undefined}
        </FormControl>

        <FormControl isInvalid={!isPasswordConfirmValid}>
          <FormLabel>Confirmar</FormLabel>
          <InputGroup size="lg">
            <Input
              type={showPasswordConfirm ? "text" : "password"}
              value={passwordConfirm}
              name="passwordConfirm"
              placeholder="Confirme a senha anterior"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              size="lg"
              required
            />
            <InputRightElement height="100%" width="4.5rem">
              <Button background="none" h="1.75rem" size="lg" onClick={handleClickEyeConfirm}>
                {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isPasswordConfirmValid ? (
            <FormErrorMessage as="p">Senha não confere.</FormErrorMessage>
          ) : undefined}
        </FormControl>

        <Button type="submit" colorScheme="red" variant="solid">
          Criar
        </Button>
      </form>
    </SignupContainer>
  );
};
