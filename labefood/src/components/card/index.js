import { CardContainer } from "./style";

export const CardCart = ({
  image,
  title,
  description,
  price,
  quantidade
}) => {

  return (
    <>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h1>{title} {quantidade}</h1>
          <p>{description}</p>
          <p>R${price}</p>
        </div>    
      </div>
    </>
  );
};
