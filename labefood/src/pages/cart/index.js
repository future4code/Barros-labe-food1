import { CartContainer } from "./style";
import { Stack, Radio, RadioGroup, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CardCart } from "../../components/card";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { CardContainer } from "../../components/card/style";
import { appName, BASE_URL, token } from "../../constants/index";
import axios from "axios";
import {Footer} from '../../components/footer/Footer'

export const CartPage = () => {
  const [cart, setCart] = useState();
  const { states, setStates, restInfo } = useContext(CartContext);
  const [ totalPrice, setTotalPrice ] = useState();
  const [ address, setAddress ] = useState({});
  const [cartProducts, setCartProducts] = useState(
    states &&
      states.filter((item) => {
        return item.quantity > 0;
      })
  );



  const getAddress = () => {
    axios.get(`${BASE_URL}/${appName}/profile/address`, {
      headers: { auth: token },
    })
    .then((response) => {
      setAddress(response.data.address)

    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  const onClickProduct = (produto) => {
    produto.quantity = 0;
  };




  // const cartProducts =
  //   states &&
  //   states.filter((item) => {
  //     return item.quantity > 0;
  //   });

  useEffect(() => {
    setCartProducts([...cartProducts]);
  }, [onClickProduct])

  useEffect(() => {
    getAddress();
  },[])
    
    useEffect(() => {
      if (cartProducts.length>0) {
        setCart(true);
       let newPrice = 0;
       cartProducts.forEach((product) => {
         newPrice += product.price * product.quantity;
       });

       setTotalPrice(newPrice);
      }
     }, [onClickProduct]);


  if (cartProducts.length === 0) {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <div className="address">
          <p>Endereço de entrega</p>
          <p>
            {address.complement
              ? `${address.street}, ${address.number}, ${address.complement}`
              : `${address.street}, ${address.number}}`}
          </p>
        </div>
        <div className="title">
          <h2>Carrinho vazio</h2>
        </div>
        <div className="price-container">
          <div className="subtotal">
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <h6>Frete R$0,00</h6>
            <p>R$00,00</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>

        <RadioGroup width="85vw">
          <Stack direction="column">
            <Radio value="1">Dinheiro</Radio>
            <Radio value="2">Cartão de crédito</Radio>
          </Stack>
        </RadioGroup>
        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
          >
            Confirmar
          </Button>
        </div>
        <Footer />
      </CartContainer>
    );
  } else {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>
        <div className="address">
          <p>Endereço de entrega</p>
          <p>
            {address.complement
              ? `${address.street}, ${address.number}, ${address.complement}`
              : `${address.street}, ${address.number}}`}
          </p>
        </div>
        <div className="rest-info">
          <h2>{restInfo.name}</h2>
          <p>{restInfo.address}</p>
          <p>{restInfo.deliveryTime} min</p>
        </div>
        {/* <div className="title">
            <h2>Carrinho cheio</h2>
          </div> */}
        {/* <CardCart /> */}
        {cartProducts &&
          cartProducts
            .filter((item) => {
              return item.quantity > 0;
            })
            .map((i) => {
              return (
                <>
                  <CardContainer key={i.id}>
                    <CardCart
                      image={i && i.photoUrl && i.photoUrl}
                      title={i.name}
                      description={i.description}
                      price={i.price.toFixed(2)}
                      // quantity={i.quantity}
                      // onClickProduct={() => onClickProduct(i)}
                    />
                    <div className="buttons">
                      {i.quantity === 0 || i.quantity === undefined ? (
                        <div></div>
                      ) : (
                        <span>{i.quantity}</span>
                      )}
                      <Button
                        onClick={() => onClickProduct(i)}
                        className="remove-button"
                      >
                        <p>Remover</p>
                      </Button>
                    </div>
                  </CardContainer>
                </>
              );
            })}
        <div className="price-container">
          <div className="subtotal">
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <h6>{`Frete R$${restInfo && restInfo.shipping.toFixed(2)}`}</h6>
            <p>{`R$${totalPrice && totalPrice.toFixed(2)}`}</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>

        <RadioGroup width="85vw">
          <Stack direction="column">
            <Radio value="1">Dinheiro</Radio>
            <Radio value="2">Cartão de crédito</Radio>
          </Stack>
        </RadioGroup>
        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
          >
            Confirmar
          </Button>
        </div>
        <Footer />
      </CartContainer>
    );
  }
};
