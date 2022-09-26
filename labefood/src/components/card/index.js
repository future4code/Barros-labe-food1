import { CardContainer } from "./style";
import mockup from "../assets/mockup-image.jpg";

export const CardCart = () => {
    return (
    <CardContainer>
      <div className="image">
        <img src={mockup} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h1>Stencil</h1>
          <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</p>
          <p>R$46,00</p>
        </div>
        <div className="buttons">
            <span>2</span>
            <button><p>Remover</p></button>
        </div>
      </div>
    </CardContainer>

    )
    
}