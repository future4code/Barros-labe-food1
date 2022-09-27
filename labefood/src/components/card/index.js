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
import { HookUsage } from "../quantity-button";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import StateGlobal from "../../context/StateGlobal";

export const CardCart = ({
  image,
  title,
  description,
  price,
  showQuantity,
}) => {
  const { quantity, setQuantity } = useContext(CartContext);
  const onClickProduct = () => {
    setQuantity(undefined)
  }
  // const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  //   useNumberInput({
  //     step: 1,
  //     defaultValue: 0,
  //     min: 1,
  //     max: 10,
  //     precision: 0,
  //   });

  // const inc = getIncrementButtonProps();
  // const dec = getDecrementButtonProps();
  // const input = getInputProps();
  // // const quantityValue = input.value;
  // // console.log(quantityValue);

  // // // let onChange= props.changeValue(value)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // onSubmit(quantityValue);
  //   setQuantity(e.input.value)
  //   console.log(quantity);
  // };

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
          {showQuantity === 0 || showQuantity === undefined ? (
            <div></div>
          ) : (
            <span>{showQuantity}</span>
          )}
          {showQuantity > 0 ? (
            <Button
              onClick={() => onClickProduct()}
              className="remove-button"
            >
              <p>Remover</p>
            </Button>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Button
                  className="add-button"
                >
                  <p>Adicionar</p>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton border="none" />
                <PopoverHeader>Selecione a quantidade desejada!</PopoverHeader>
                <PopoverBody>
                  <HookUsage />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </CardContainer>
  );
};
