import { CartContainer } from "./style";
import { Stack, Radio, RadioGroup, Button } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { CardCart } from "../../components/card";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { CardContainer } from "../../components/card/style";
import { appName, BASE_URL, token } from "../../constants/index";
import axios from "axios";
import { Footer } from "../../components/footer/Footer";

export const CartPage = () => {
  const [cart, setCart] = useState(false);
  const { states, setStates, restInfo } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState();
  const [address, setAddress] = useState({});
  const [ paymentMethodRadio, setPaymentMethodRadio ] = useState(undefined)
  const [cartProducts, setCartProducts] = useState(
    states &&
      states.filter((item) => {
        return item.quantity > 0;
      })
  );

  let products =
    cartProducts &&
    cartProducts.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });
    console.log(products);
    const body = {
      products: products,
      paymentMethod: paymentMethodRadio,
    };
    console.log(body);

// console.log(cartProducts);
  const getAddress = () => {
    axios
      .get(`${BASE_URL}/${appName}/profile/address`, {
        headers: { auth: token },
      })
      .then((response) => {
        if (response.data.address) {
          setAddress(response.data.address);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // let body = {
  //   products: [cartProducts && cartProducts.map((item) => {
  //     return {id: item.id, quantity: item.quantity}
  //   })],
  //   paymentMethod: paymentMethodRadio
  // }
  // console.log(body);

  const placeOrder = () => {
    axios.post(`${BASE_URL}/${appName}/restaurants/${restInfo.id}/order`, body, {
      headers: { auth: token }
    })
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err.response);
    })
  }



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickProduct = useCallback((produto) => {
    produto.quantity = 0;
    cartProducts.splice(cartProducts.indexOf(produto),1)
    setCart(!cart)
  });


  // const cartProducts =
  //   states &&
  //   states.filter((item) => {
  //     return item.quantity > 0;
  //   });

  useEffect(() => {
    if (cartProducts.length > 0) {

      setCartProducts([...cartProducts]);
    }
    console.log(cartProducts);
  }, [cart]);

  useEffect(() => {
    getAddress();
  }, []);

  useEffect(() => {
    if (cartProducts.length > 0) {
      let newPrice = 0;
      cartProducts.forEach((product) => {
        newPrice += product.price * product.quantity;
      });

      setTotalPrice(newPrice);
    }
  }, [cartProducts]);

  if (cartProducts.length === 0) {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <div className="address">
          <p>Endereço de entrega</p>
          <p>
            {!address && "Endereço não encontrado :/"}
            {address.complement
              ? `${address.street !== undefined ? address.street : ""}, ${
                  address.number !== undefined ? address.number : ""
                }, ${
                  address.complement !== undefined ? address.complement : ""
                }`
              : `${address.street !== undefined ? address.street : ""} ${
                  address.number !== undefined ? address.number : ""
                }`}
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
            <Radio
              value="money"
              onChange={(e) => {
                setPaymentMethodRadio(e.target.value);
              }}
            >
              Dinheiro
            </Radio>
            <Radio
              value="creditcard"
              onChange={(e) => {
                setPaymentMethodRadio(e.target.value);
              }}
            >
              Cartão de crédito
            </Radio>
          </Stack>
        </RadioGroup>
        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
            opacity="0.80"
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
            {address === undefined
              ? "Endereço não encontrado :/"
              : address.complement
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
            <Radio
              value="money"
              onChange={(e) => {
                setPaymentMethodRadio(e.target.value);
              }}
            >
              Dinheiro
            </Radio>
            <Radio
              value="creditcard"
              onChange={(e) => {
                setPaymentMethodRadio(e.target.value);
              }}
            >
              Cartão de crédito
            </Radio>
          </Stack>
        </RadioGroup>
        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
            onClick={placeOrder}
          >
            Confirmar
          </Button>
        </div>
        <Footer />
      </CartContainer>
    );
  }
};
