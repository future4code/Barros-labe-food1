import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile] = useRequest(`/{appName}/profile`, {});

  return <p>Meu Perfil</p>;
};
