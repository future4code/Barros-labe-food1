import { Divider, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { appName, BASE_URL, updateProfile } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage";
import { ProfileContainer, UserInfo, UserRequests} from "./style";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const ProfilePage = () => {
  useProtectPage();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState({})

  const token = localStorage.getItem("token")


  const userProfile = () => {
      axios.get(`${BASE_URL}/${appName}/profile`, {
      headers: { auth: token }
    }).then((response)=>{
      response.json().then(function(conversion){
        console.log(conversion.user)
      })})
    .catch((erro) => { console.log(erro) })
  }
  console.log(userProfile);
    // useEffect(() => { userProfile() }, [])


      return (
    
        <ProfileContainer>
          <Stack padding="5" alignItems="center">
              <h2>Meu perfil</h2>
        <Divider padding="5px"/>
          </Stack>
        <UserInfo>
          <div className="userInfo">
    
          </div>
          <Stack bg="blackAlpha.100" alignItems="flex-start" width="100%" padding="10px"  >
            <p>Endereço cadastrado</p>
          </Stack>
      
        </UserInfo>
        <UserRequests>
        <h2>Histórico de pedidos</h2>
        <Divider width="90vw" borderColor="black" />
        </UserRequests>
        <Footer />
        </ProfileContainer>

)
};
//   const [form, onChangeInputs] = useForm({
//     name:"",
//     email: "",
//     cpf:""
    
// });
// //--- Estados com valores booleanos para a validação do dados preenchidos no form
// const [isNameValid, setIsNameValid] = useState(true)
// const [isEmailValid, setIsEmailValid] = useState(true)
// const [isCpfValid, setIsCpfValid] = useState(true)

// const onSubmit =  (e)=>{
//   e.preventDefault();
//     //--- Testes de validação que retorna booleanos para usar nas mensagens de erro do form control...
//   setIsNameValid(validateInput(form.name))
//   setIsEmailValid(validateInput(form.email))
//   setIsCpfValid(validateInput(form.cpf))

  
//   try{
//       if(isNameValid && isEmailValid && isCpfValid ){
//           updateProfile({
//             name: form.name,
//             email: form.email,
//             cpf: form.cpf
//           })
//           alert("Cadastro efetuado com sucesso!")
//           }
//       } catch(e){
//           console.log(e.response);
//       }
//   }
  

  // const updateProfile =  fetch(
  //   `${BASE_URL}/${appName}/profile`,
  //   {
  //       headers:{
  //         auth: token
  //       }
  //   }
  // ).then((response)=>{
  //   response.json().then(function(conversion){
  //     console.log(conversion.user);
  //   })
  // })
  // .catch((e)=>{console.log(e);})
  //   console.log(updateProfile);



  






