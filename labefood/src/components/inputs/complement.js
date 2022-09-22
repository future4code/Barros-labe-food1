import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const ComplementInput = ({value, onChange}) =>{
    return(
        <FormControl>
            <FormLabel> Complemento* </FormLabel>
            <Input
                name="complement"
                value={value}
                onChange={onChange}
                placeholder= "Apto./Bloco"
                />
                {/* {!isValid ? (
            <FormErrorMessage as="p">
                Campo obrigatório
            </FormErrorMessage>
                ) : undefined} */}
        </FormControl>
    )
}