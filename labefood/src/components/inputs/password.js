import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordInput = ({ isValid, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box p={0}>
      <FormControl variant="floating" id="password" isRequired isInvalid>
        <Input name="email" value={value} onChange={onChange} type={showPassword ? 'text' : 'password'} />
        <FormLabel>Senha</FormLabel>
        <InputGroup size="md">
          <InputRightElement width="4.5rem">
            <IconButton
              variant="eye-icon"
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
              h="1.75rem"
              size="sm"
              onClick={onClickShowPassword}
            />
          </InputRightElement>
        </InputGroup>
        {!isValid ? (
          <FormErrorMessage as="p">
            A senha deve conter ao menos 6 caracteres
          </FormErrorMessage>
        ) : undefined}
      </FormControl>
    </Box>
  );
};
