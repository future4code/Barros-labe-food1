import { CardContainer } from "./style";
import mockup from "../assets/mockup-image.jpg";
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
// import { HookUsage } from "../quantity-button";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import StateGlobal from '../../context/StateGlobal'

export const CardCart = ({
  image,
  title,
  description,
  price,
  button,
  onClickProduct,
  value,
  onSubmit
}) => {

  // const { quantity, setQuantity } = useContext(CartContext, StateGlobal)
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
  const quantityValue = input.value;
  console.log(quantityValue);

  // let onChange= props.changeValue(value)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(quantityValue);
  };





  
  // const { quantity, setQuantity } = useState()
  // const getData = (data) => {
  //   console.log(data);
  // }
  // console.log(quantity);

  return (
    <CardContainer>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>R${price}</p>
        </div>
        <div className="buttons">
          {value ? <span>{value}</span> : <div></div>}
          <Popover>
            <PopoverTrigger>
              <button onClick={onClickProduct} className="add-button">
                <p>{button}</p>
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton border="none" />
              <PopoverHeader>Selecione a quantidade desejada!</PopoverHeader>
              <PopoverBody>
                <form onSubmit={handleSubmit}>
                  <HStack maxW="320px">
                    <Button {...inc}>+</Button>
                    <Input {...input} />
                    <Button {...dec}>-</Button>
                  </HStack>
                  <Button colorScheme="blue" variant="ghost">
                    Adicionar ao carrinho
                  </Button>
                </form>
                {/* <Button colorScheme="blue" variant="ghost" onClick={onClickQuantity} value={value} onChange={onChange}>Adicionar ao carrinho</Button> */}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </CardContainer>
  );
};
