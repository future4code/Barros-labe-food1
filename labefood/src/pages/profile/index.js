import { Divider, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { appName, BASE_URL, updateProfile } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage";
import { ProfileContainer, UserAddress, UserInfo, UserRequests, userInfoContainer} from "./style";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";




export const ProfilePage = () => {
  useProtectPage();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState({})
  

  const token = localStorage.getItem("token")
  


const getProfile = () =>{
  axios.get(`${BASE_URL}/${appName}/profile`,
    {
      headers:{
        auth: token
      }
    }).then((response)=>{
      setProfiles(response.data.user)
      console.log(response);
    }).catch((e)=>{
      console.log(e);
    })
  }
  useEffect(() => { getProfile() }, [])
  
  
  
  
  return (
    
        <ProfileContainer>
          <Stack padding="5" alignItems="center">
              <h2>Meu perfil</h2>
          </Stack>
        <Divider/>

          <UserInfo>
            <section>
              <h1>{profiles && profiles.name}</h1>
              <h3>{profiles && profiles.email}</h3>
              <h3>{profiles && profiles.cpf}</h3>
            </section>
            <button>
              <MdEdit />
            </button>
          </UserInfo>
        
        <UserAddress>
          <div>
            <p>Endereço cadastrado</p>
            <h3>{profiles && profiles.address}</h3>
          </div>
            <button>
              <MdEdit />
            </button>
        </UserAddress>
        <UserRequests>
          <h2>Histórico de pedidos</h2>
        <Divider width="90vw" borderColor="black" />
        </UserRequests>
        <Footer />
        </ProfileContainer>

)
};





  






