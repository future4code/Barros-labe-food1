import { CardContainer } from "./style";
import mockup from "../assets/mockup-image.jpg";

export const CardCart = ({image, title, description, price, button }) => {
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
            <span>2</span>
            <button><p>{button}</p></button>
        </div>
      </div>
    </CardContainer>

    )
    
}