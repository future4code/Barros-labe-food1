import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer"
import { appName, BASE_URL } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage";
import {
  Title,
  Detail,
  MainConteiner,
} from "./styledRest";
import { FiChevronLeft } from "react-icons/fi";
import { goBack } from "../../routes/coordinator";

export const RestaurantsPage = () => {
  useProtectPage();

  const navigate = useNavigate();

  const parametro = useParams();

  const [states, setStates] = useState([]);

  const token = localStorage.getItem("token");


  const detailRestaurant = () => {
    axios.get(`${BASE_URL}/${appName}/restaurants/${parametro.restauranteId}`, {
      headers: { auth: token }
    }).then((response) => { setStates(response.data.restaurant); })
      .catch((erro) => { console.log(erro) })
  }

  useEffect(() => { detailRestaurant() }, [])

  return (
    <MainConteiner>
      <div>
        <button
          className="go-back-button"
          onClick={() => goBack(navigate)}>
          <FiChevronLeft />
        </button>
        <div className="title">
        <Title>Restaurante</Title>
        </div>
      </div>

      <Detail>
        <img src={states.logoUrl} alt="Logo restaurante" />
        <p className="name-restaurant">{states.name}</p>
        <p>{states.category}</p>
        <p>{states.shipping} min</p>
        <p>Frete R$:{states.deliveryTime},00</p>
        <p>{states.address}</p>
      </Detail>

      {states.products && states.products.map((i) => {
        return (
          <>
            <>

              <img src={i.photoUrl} alt='Produtos' />
              <p>{i.name}</p>
              <>
                <p>{i.description}</p>
                <h6>Preço R$:{i.price}</h6>
              </>
            </>
          </>
        )
      })}



    </MainConteiner>
  )
}
