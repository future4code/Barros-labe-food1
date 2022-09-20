import LogoInvert from "../../img/logo-future-eats-invert.png";
import { SignupContainer } from "./SignupStyled";
import { useForm } from "../../hooks/use-form";
import { useEffect, useState } from "react";
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
import {
  CpfInput,
  EmailInput,
  NameInput,
  PasswordInput,
} from "../../components/inputs";
import { BASE_URL } from "../../constants";

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
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //---Lógica para o 'olho' da senha
  const [showPassword, setShowPassword] = useState(false); //primeira senha
  const handleClickEye = () => setShowPassword(!showPassword);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false); //segunda senha
  const handleClickEyeConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);

  const handleSubmit = (event) => {
    event.preventDefault();
    //--- Testes de validação que retorna booleanos para usar nas mensagens de erro do form control...
    setIsEmailValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email));
    setIsNameValid(/[A-Za-z]* [A-Za-z]{2,}$/.test(form.name));
    setIsCpfValid(
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(
        form.cpf
      )
    );
    setIsPasswordValid(/.{6,}/.test(form.password));
    setIsPasswordConfirmValid(passwordConfirm === form.password ? true : false);

    //--- Requisição para criar um novo cadastro
    if (
      isEmailValid &&
      isNameValid &&
      isCpfValid &&
      isPasswordConfirmValid &&
      isPasswordValid
    ) {
      axios
        .post(`${BASE_URL}/rappi4A/signup`, form)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          Coordinator.goToAdressRegistration(navigate);
        })
        .catch((error) => {
          alert(
            "Erro ao processar sua requisição: " + error.response.data.message
          );
        });
    }
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
        <NameInput
          isValid={isNameValid}
          value={form.name}
          onChange={onChange}
        />

        {/* 
        <FormControl isInvalid={!isNameValid}>
          <FormLabel>Nome*</FormLabel>
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
              Atenção: Nome e sobrenome.
            </FormErrorMessage>
          ) : undefined}
        </FormControl> */}

        <EmailInput
          isValid={isEmailValid}
          value={form.email}
          onChange={onChange}
        />

        {/* <FormControl isInvalid={!isEmailValid}>
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
        </FormControl> */}

        <CpfInput isValid={isCpfValid} value={form.cpf} onChange={onChange} />

        {/* <FormControl isInvalid={!isCpfValid}>
          <FormLabel>CPF</FormLabel>
          <Input
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
        </FormControl> */}

        <PasswordInput
          isValid={isPasswordValid}
          label={"Senha"}
          placeholder={"Mínimo 6 caracteres"}
          value={form.password}
          onChange={onChange}
          showPassword={showPassword}
          handleClick={handleClickEye}
          errorMessage={"Formato de senha inválido."}
        />

        {/* <FormControl isInvalid={!isPasswordValid}>
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
              <Button
                background="none"
                h="1.75rem"
                size="lg"
                onClick={handleClickEye}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isPasswordValid ? (
            <FormErrorMessage as="p">
              Formato de senha inválido.
            </FormErrorMessage>
          ) : undefined}
        </FormControl> */}

        <PasswordInput
          isValid={isPasswordConfirmValid}
          label={"Confirmar"}
          placeholder={"Confirme a senha anterior."}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          showPassword={showPasswordConfirm}
          handleClick={handleClickEyeConfirm}
          errorMessage={"Senha nâo Confere"}
        />

        {/* <FormControl isInvalid={!isPasswordConfirmValid}>
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
              <Button
                background="none"
                h="1.75rem"
                size="lg"
                onClick={handleClickEyeConfirm}
              >
                {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isPasswordConfirmValid ? (
            <FormErrorMessage as="p">Senha não confere.</FormErrorMessage>
          ) : undefined}
        </FormControl> */}

        <Button type="submit" colorScheme="red" variant="solid">
          Criar
        </Button>
      </form>
    </SignupContainer>
  );
};
