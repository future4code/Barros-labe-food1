import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const NeighbourhoodInput = ({isValid, value, onChange}) =>{
    return(
        <FormControl isInvalid={!isValid}>
            <FormLabel> Logradouro* </FormLabel>
            <Input
                name="street"
                value={value}
                onChange={onChange}
                placeholder= "Rua / Av."
                />
                {!isValid ? (
            <FormErrorMessage as="p">
                Campo obrigatório
            </FormErrorMessage>
                ) : undefined}
        </FormControl>
    )
}