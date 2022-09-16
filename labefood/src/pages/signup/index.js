import LogoInvert from "../../img/logo-future-eats-invert.png";
import { SignupContainer } from "./SignupStyled";
import { useForm } from "../../hooks/use-form";
import { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

export const SignupPage = () => {
  const [form, onChange, clearInputs] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCpfValid, setIsCpfValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  
  const [isPasswordConfirmValid, setPasswordConfirmaValid] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState('')

  console.log(isPasswordValid)
  console.log(isPasswordConfirmValid)

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEmailValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email))
    setIsNameValid(/[A-Z][a-z]* [A-Z][a-z]{2,}$/.test(form.name))
    setIsCpfValid(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(form.cpf))
    setIsPasswordValid(/^[0-9]{6,8}$/.test(form.password));
    setPasswordConfirmaValid( passwordConfirm === form.password ? true : false);
  }
  return (
    <SignupContainer>
      <img src={LogoInvert} alt="logo da Future Eats" />
      <h2>Cadastrar</h2>

      <form onSubmit={handleSubmit}>

          <FormControl isInvalid={!isNameValid}>
            <FormLabel>Nome</FormLabel>
            <Input type="text" name="name" placeholder="Nome e sobrenome" value={form.name} onChange={onChange} required />
            {!isNameValid ? (
                <FormErrorMessage>Atenção: Nome e sobrenome</FormErrorMessage>
                ) : (
                undefined
            )}
          </FormControl>

          <FormControl isInvalid={!isEmailValid}>
          <FormLabel>E mail</FormLabel>
            <Input type="email" name="email" placeholder="email@email.com" value={form.email} onChange={onChange} required />
            {!isEmailValid ? (
                <FormErrorMessage>Email inválido.</FormErrorMessage>
                ) : (
                undefined
            )}
          </FormControl>

            <FormControl isInvalid={!isCpfValid}>
            <FormLabel>CPF</FormLabel>
            <Input type="number" name="cpf" placeholder="000.000.000-00" value={form.cpf} onChange={onChange} required />
            {!isCpfValid ? (
                <FormErrorMessage>Número de CPF inválido.</FormErrorMessage>
                ) : (
                undefined
            )}
          </FormControl>

            <FormControl isInvalid={!isPasswordValid}>
            <FormLabel>Senha</FormLabel>
            <Input type="password" name="password" placeholder="Mínimo 6 caracteres" value={form.password} onChange={onChange} />
            {!isPasswordValid ? (
                <FormErrorMessage>Formato de senha inválido.</FormErrorMessage>
                ) : (
                undefined
            )}
          </FormControl>

            <FormControl  isInvalid={!isPasswordConfirmValid}>
            <FormLabel>Confirmar</FormLabel>
            <Input type="password" value={passwordConfirm} name="passwordConfirm" placeholder="Confirme a senha anterior" onChange={(e)=>setPasswordConfirm(e.target.value)} required />
            {!isPasswordConfirmValid ? (
                <FormErrorMessage>Senha não confere.</FormErrorMessage>
                ) : (
                undefined
            )}
          </FormControl>


            <Button type="submit" colorScheme="red" variant="solid">
              Criar
            </Button>
      </form>

    </SignupContainer>
  );
};
