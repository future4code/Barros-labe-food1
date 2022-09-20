import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordInput = ({isValid, value, onChange, showPassword, handleClick}) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Senha</FormLabel>
      <InputGroup size="lg">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Mínimo 6 caracteres"
          value={value}
          onChange={onChange}
          size="lg"
        />
        <InputRightElement height="100%" width="4.5rem">
          <Button
            background="none"
            h="1.75rem"
            size="lg"
            onClick={handleClick}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
        <FormErrorMessage as="p">Formato de senha inválido.</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
