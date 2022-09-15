import { LoginPageContainer } from "./style";
import logo from "../../components/assets/logo.svg";
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
  import {useForm} from '../../hooks/use-form'
  
  
  
  export const LoginPage = () => {
    const [form, onChange, clearInputs] = useForm({
      email:"",
      password:"",
    });
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid]= useState(true)
    const [showPassword, setShowPassword] = useState(false)
  
    const onSubmit = (e) =>{
    e.preventDefault();
    console.log(form);
    setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
    setIsPasswordValid(/.{6,}/.test(form.password))
    }
  
    const onClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
        <LoginPageContainer>
      <img src={logo} alt="Logo da empresa" />
      <div className="title">
        <span className="text">Entrar</span>
      </div>
      <form onSubmit={onSubmit}>
        <Box p={0}>
          <FormControl marginBottom="1rem" variant="floating" id="email"  isInvalid={!isEmailValid}>
            <Input
              name="email"
              type='email'
              value={form.email}
              onChange={onChange}
              placeholder= ""
              />
              <FormLabel>E-mail</FormLabel>
            {!isEmailValid ? (
                        <FormErrorMessage as="p">
                            E-mail inválido.
                        </FormErrorMessage>
                            ) : undefined}
          </FormControl>
          <FormControl paddingBottom="1rem" variant="floating" id="password"  isInvalid={!isPasswordValid}>
            <InputGroup size='md'>
              <Input
                name="password"
                value={form.password}
                onChange={onChange}
                pr='4.5rem'
                type={showPassword ? 'text' : 'password'}
                placeholder=''
              />
              <FormLabel>Senha</FormLabel>
                <InputRightElement  right="-10px" top="7px"  width='3rem'>
                <button  h='1.75rem' size='3rm' onClick={onClickShowPassword}>
                 {showPassword ? <FaEyeSlash/> : <FaEye/> }
                </button>
               </InputRightElement>
            </InputGroup>
               {!isPasswordValid ? (
                    <FormHelperText as="p">
                        E-mail inválido.
                    </FormHelperText>
                ) : undefined}
              </FormControl>
              <Button colorScheme="red" variant="solid">
              Entrar
              </Button>
              <Button  colorScheme="black" variant="ghost">
              Não possui cadastro? Clique aqui.
              </Button>
</Box>
</form>
        </LoginPageContainer>
  );
};