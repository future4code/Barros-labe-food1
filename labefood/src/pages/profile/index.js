import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { useProtectPage } from "../../hooks/useProtectPage";
import {useRequestData} from "../../hooks/useRequestData"
import {Header } from "../../components/header";
import { BASE_URL } from "../../constants/index";

export const ProfilePage = () => {
  useProtectPage();
  const navigate = useNavigate();
  

  return (
  
  
  <>
  <p>Meu Perfil</p>
  {/* <Header showArrow={'false'} showTitle={'true'} title={"Meu perfil"} />
  <Footer/> */}
  </>
  
  
  
  
  
  
  )
};
