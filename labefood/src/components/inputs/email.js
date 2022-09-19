import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";

export const EmailInput = ({value, onChange, isValid}) => {
  <FormControl isInvalid={!isValid}>
    <FormLabel>E mail</FormLabel>
    <Input
      type="email"
      name="email"
      placeholder="email@email.com"
      value={value}
      onChange={onChange}
      size="lg"
      required
    />
    {!isValid ? (
      <FormErrorMessage as="p">Email inválido.</FormErrorMessage>
    ) : undefined}
  </FormControl>;
};
