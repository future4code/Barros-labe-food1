import { CardContainer } from "./style";
import { Button } from "@chakra-ui/react";

export const CardCart = ({
  image,
  title,
  description,
  price,
  quantity,
  onClickProduct
}) => {


  return (
    
    <>
    {/* <CardContainer> */}
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>R${price}</p>
        </div>

        {/* <div className="buttons">
          {quantity === 0 || quantity === undefined ? (
            <div></div>
            ) : (
              <span>{quantity}</span>
              )}
              <Button onClick={() => onClickProduct()} className="remove-button">
              <p>Remover</p>
              </Button>
              </div> */}
            </div>
            {/* </CardContainer> */}
            </>
  );
};
