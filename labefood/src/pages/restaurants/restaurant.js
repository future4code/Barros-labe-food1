import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/Context";
import StateGlobal from '../../context/StateGlobal'
import { useNavigate, useParams } from "react-router-dom";
import { appName, BASE_URL } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage";
import {
  Title,
  Detail,
  MainConteiner,
  Info,
  Cards,
} from "./styledRest";
import { FiChevronLeft } from "react-icons/fi";
import { goBack } from "../../routes/coordinator";
import { CardCart } from "../../components/card";

export const RestaurantsPage = () => {
  useProtectPage();

  const navigate = useNavigate();

  const parametro = useParams();

  const [states, setStates] = useState([]);

  const token = localStorage.getItem("token");

  // const { cart, quantity } = useContext(CartContext, stateGlobal);

  const [ quantity, setQuantity] = useState()


  // console.log(quantity);
  // const handleQuantity = (e) => {
  //   setQuantity(e.target.value)
  // }


   const getData = (data) => {
     console.log(data);
   };

  const detailRestaurant = () => {
    axios.get(`${BASE_URL}/${appName}/restaurants/${parametro.restauranteId}`, {
      headers: { auth: token }
    }).then((response) => { setStates(response.data.restaurant); })
      .catch((erro) => { console.log(erro) })
  }

  useEffect(() => { detailRestaurant() }, [])

  return (
    <>
   
      <MainConteiner>
        <div>
          <button className="go-back-button" onClick={() => goBack(navigate)}>
            <FiChevronLeft />
          </button>
          <div className="title">
            <Title>Restaurante</Title>
          </div>
        </div>

        <Detail>
          <img src={states.logoUrl} alt="Logo restaurante" />
          <p className="name-restaurant">{states.name}</p>
        </Detail>
      </MainConteiner>
      <Info>
        <p>{states.category}</p>
        <div className="shipping-price">
          <h6>{states.deliveryTime} min</h6>
          <p> Frete R$:{states.shipping},00</p>
        </div>
        <p>{states.address}</p>
      </Info>
      <Cards>
        {states.products &&
          states.products.map((i) => {
            return (
              <>
                {i.photoUrl && (
                  <CardCart
                    image={i && i.photoUrl && i.photoUrl}
                    title={i.name}
                    description={i.description}
                    price={i.price.toFixed(2)}
                    button={"Adicionar"}
                    onSubmit={getData}
                    // value={quantity}
                    // onChange={handleQuantity}
                  />
                )}
                {/* <CardCart /> */}
                {/* <>

              <img src={i.photoUrl} alt='Produtos' />
              <p>{i.name}</p>
              <>
                <p>{i.description}</p>
                <h6>Preço R$:{i.price}</h6>
              </>
            </> */}
              </>
            );
          })}
      </Cards>


    </>
  );
}
