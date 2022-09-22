import LogoInvert from "../../img/logo-future-eats-invert.png";
import { useForm } from "../../hooks/use-form";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Coordinator from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { AdressRegistrationContainer } from "./style";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    Input,
    Button,
    Divider
} from "@chakra-ui/react";
import { AdressRegistration, BASE_URL } from "../../constants";
import { CityInput, ComplementInput, NeighbourhoodInput, NumberInput, StateInput, StreetInput } from "../../components/inputs";

export const AdressRegistrationPage = () => {
    const navigate = useNavigate();
    const [form, onChangeInputs, clearInputs] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
        
});

console.log(form);

const [isStreetValid, setIsStreetValid] = useState(true)
const [isNumberValid, setIsNumberValid] = useState(true)
const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true)
const [isCityValid, setIsCityValid] = useState(true)
const [isStateValid, setIsStateValid] = useState(true)
const [iscomplementValid, setIscomplementValid] = useState(true)


const onSubmit = async (e)=>{
    e.preventDefault();
    try{
        if(
            isStreetValid&&
            isNumberValid&&
            isNeighbourhoodValid&&
            isCityValid&&
            isStateValid
            ){
                await AdressRegistration({
                    street: form.street,
                    number: form.number,
                    neighbourhood: form.neighbourhood,
                    city: form.city,
                    state: form.state
                })
                alert("Cadastro efetuado com sucesso!")
            }
    } catch(e){
        alert(e.response.data.message)
    }
}

return (
  <AdressRegistrationContainer>
    <button
      className="go-back-button"
      onClick={() => Coordinator.goBack(navigate)}
    >
      <FiChevronLeft />
    </button>
    <Divider />
    <h2>
      <strong>Meu endereço</strong>
    </h2>

    <form onSubmit={onSubmit}>
      <StreetInput
        value={form.title}
        onChange={onChangeInputs}
        isValid={isStreetValid}
      />
      <NumberInput
        value={form.number}
        onChange={onChangeInputs}
        isValid={isNumberValid}
      />
      <ComplementInput
        value={form.complement}
        onChange={onChangeInputs}
        isValid={true}
      />
      <NeighbourhoodInput
        value={form.neighbourhood}
        onChange={onChangeInputs}
        isValid={isNeighbourhoodValid}
      />
      <CityInput
        value={form.city}
        onChange={onChangeInputs}
        isValid={isCityValid}
      />
      <StateInput
        value={form.state}
        onChange={onChangeInputs}
        isValid={isStateValid}
      />

      <Button
        marginTop="0.5rem"
        borderRadius="2px"
        height="2.625rem"
        type="submit"
        colorScheme="red"
        variant="solid"
        color="black"
      >
        Salvar
      </Button>
    </form>
  </AdressRegistrationContainer>
);
};
