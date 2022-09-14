import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

export const EmailInput = ({ isValid, value, onChange }) => {
  return (
    <Box p={0}>
      <FormControl variant="floating" id="email" isRequired isInvalid>
        <Input name="email" value={value} onChange={onChange} />
        <FormLabel>E-mail</FormLabel>
        {!isValid ? (
          <FormErrorMessage>E-mail inválido</FormErrorMessage>
        ) : undefined}
      </FormControl>
    </Box>
  );
};
