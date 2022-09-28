import { useForm } from "../../hooks/use-form";
import { useState } from "react";
import * as Coordinator from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { AddressRegistrationContainer } from "./style";
import {
    Button,
    Divider
} from "@chakra-ui/react";
import { AddressRegistration, validateInput } from "../../constants";
import { CityInput, ComplementInput, NeighbourhoodInput, NumberInput, StateInput, StreetInput } from "../../components/inputs";
import { useProtectPage } from "../../hooks/useProtectPage";

export const AdressRegistrationPage = () => {
    useProtectPage();
    const navigate = useNavigate();
    const [form, onChangeInputs] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
        
});
//--- Estados com valores booleanos para a validação do dados preenchidos no form
const [isStreetValid, setIsStreetValid] = useState(true)
const [isNumberValid, setIsNumberValid] = useState(true)
const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true)
const [isCityValid, setIsCityValid] = useState(true)
const [isStateValid, setIsStateValid] = useState(true)
const [isComplementValid, setIsComplementValid] = useState(true)




const onSubmit =  (e)=>{
    e.preventDefault();
      //--- Testes de validação que retorna booleanos para usar nas mensagens de erro do form control...
    setIsStreetValid(validateInput(form.street))
    setIsNumberValid(validateInput(form.number))
    setIsNeighbourhoodValid(validateInput(form.neighbourhood))
    setIsCityValid(validateInput(form.city))
    setIsStateValid(validateInput(form.state))
    setIsComplementValid(validateInput(form.complement))
    
    try{
        if(isStreetValid && isNumberValid && isNeighbourhoodValid && isCityValid && isStateValid){
            AddressRegistration({
                street: form.street,
                number: form.number,
                neighbourhood: form.neighbourhood,
                city: form.city,
                state: form.state,
                complement: form.complement
            })
            // localStorage.setItem("token");
            alert("Cadastro efetuado com sucesso!")
            Coordinator.goToFeedPage(navigate)
            }
        } catch(e){
            console.log(e.response);
            // alert(e)
        }
    }
    
return (

  <AddressRegistrationContainer>

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
            isValid={isComplementValid}  
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
    </AddressRegistrationContainer>

);
};
