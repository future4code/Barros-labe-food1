import { useNavigate } from "react-router-dom";
import {useRequestData} from "../../hooks/useRequestData"

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile] = useRequestData(`/{appName}/profile`, {});

  return <p>Meu Perfil</p>;
};
