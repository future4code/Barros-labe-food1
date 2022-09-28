import { CartContainer } from "./style";
import { Stack, Radio, RadioGroup, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CardCart } from "../../components/card";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { CardContainer } from "../../components/card/style";

export const CartPage = () => {
  const [cart, setCart] = useState();
  const { states, setStates, restInfo } = useContext(CartContext);
  const [ totalPrice, setTotalPrice ] = useState();

  const onClickProduct = (produto) => {
    produto.quantity = 0;
  };


  const cartProducts =
    states &&
    states.filter((item) => {
      return item.quantity > 0;
    });

    
    useEffect(() => {
      
      if (cartProducts.length>0) {
        setCart(true);
       let newPrice = 0;
       cartProducts.forEach((product) => {
         newPrice += product.price * product.quantity;
       });

       setTotalPrice(newPrice);
      }
     }, [states]);

  console.log(cartProducts);

  if (!cart) {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <div className="address">
          <p>Endereço de entrega</p>
          <p>Rua teste, 13</p>
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
      </CartContainer>
    );
  } else {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>
        <div className="address">
          <h6>Endereço de entrega</h6>
          <p>Rua teste, 13</p>
        </div>
        <div className="rest-info">
          <h2>Bullguer Vila Madalena</h2>
          <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
          <p>30 - 45 min</p>
        </div>
        {/* <div className="title">
            <h2>Carrinho cheio</h2>
          </div> */}
        {/* <CardCart /> */}
        {cartProducts &&
          cartProducts.map((i) => {
            return (
              <>
                <CardContainer key={i.id}>
                  <CardCart
                    image={i && i.photoUrl && i.photoUrl}
                    title={i.name}
                    description={i.description}
                    price={i.price.toFixed(2)}
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
      </CartContainer>
    );
  }
};
