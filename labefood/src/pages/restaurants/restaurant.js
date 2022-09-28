import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appName, BASE_URL } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage";
import { Title, Detail, MainConteiner, Info, Cards } from "./styledRest";
import { FiChevronLeft } from "react-icons/fi";
import { goBack } from "../../routes/coordinator";
import { CardCart } from "../../components/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  useNumberInput,
  Input,
  HStack,
} from "@chakra-ui/react";
// import { HookUsage } from "../../components/quantity-button/index";
import { CardContainer } from "../../components/card/style";
// import { CartContext } from "../../context/Context";

export const RestaurantsPage = () => {
  // const { quantities, setQuantities } = useContext(CartContext);
  useProtectPage();

  const navigate = useNavigate();

  const parametro = useParams();

  const [states, setStates] = useState([]);

  const token = localStorage.getItem("token");

  const onClickProduct = () => {};



  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 1,
      max: 10,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleClick = (produto) => {
    produto.quantity = input.value
    console.log(produto)
  };

  const detailRestaurant = () => {
    axios
      .get(`${BASE_URL}/${appName}/restaurants/${parametro.restauranteId}`, {
        headers: { auth: token },
      })
      .then((response) => {
        const produtos = response && response.data.restaurant.products.map((item)=>{
          return {photoUrl: item.photoUrl, name: item.name, description: item.description, price: item.price, quantity: 0 }
        })        
         setStates(produtos);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    detailRestaurant();
  }, []);

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
        {states &&
          states.map((i) => {
            // i.quantity = 0;
            return (
              <>
                {i.photoUrl && (
                  <CardContainer>
                    <CardCart
                      image={i && i.photoUrl && i.photoUrl}
                      title={i.name}
                      description={i.description}
                      price={i.price.toFixed(2)}
                      quantidade = {i.quantity}
                      // onClickProduct={(currentQuantity) => {
                      //   setCurrentQuantity(currentQuantity);
                      // }}
                    ></CardCart>
                    <div className="buttons">
                      {i.quantity === 0 || i.quantity === undefined ? (
                        <div></div>
                      ) : (
                        <span>{i.quantity}</span>
                      )}
                      {i.quantity > 0 ? (
                        <Button
                          onClick={() => onClickProduct()}
                          className="remove-button"
                        >
                          <p>Remover</p>
                        </Button>
                      ) : (
                        <Popover>
                          <PopoverTrigger>
                            <Button className="add-button">
                              <p>Adicionar</p>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton border="none" />
                            <PopoverHeader>
                              Selecione a quantidade desejada!
                            </PopoverHeader>
                            <PopoverBody>

                              <form >
                                <HStack maxW="320px">
                                  <Button {...inc}>+</Button>
                                  <Input {...input} />
                                  <Button {...dec}>-</Button>
                                </HStack>
                                <Button
                                  onClick={()=>handleClick(i)}
                                  colorScheme="blue"
                                  variant="ghost"
                                >
                                  Adicionar ao carrinho
                                </Button>
                              </form>

                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </CardContainer>
                )}
              </>
            );
          })}
      </Cards>
    </>
  );
};
