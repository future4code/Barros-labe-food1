import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { useProtectPage } from "../../hooks/useProtectPage";
import {useRequestData} from "../../hooks/useRequestData"

export const ProfilePage = () => {
  useProtectPage();
  const navigate = useNavigate();
  // const [profile] = useRequestData(`/{appName}/profile`, {});

  return (
  
  
  <>
  <p>Meu Perfil</p>
  
  <Footer/>
  </>
  
  
  
  
  
  
  )
};
