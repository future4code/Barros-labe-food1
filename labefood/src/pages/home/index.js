import {useNavigate} from "react-router-dom"
import { Backgroud } from "./HomeStyled"
import Logo from '../../img/logo-future-eats.png'

export const HomePage = () =>{
    const navigate= useNavigate();
    return(
        <Backgroud
        onClick={()=>navigate("/login")}
        >
         <div>
     
         <img src={Logo}></img>
         </div>
     
        
        </Backgroud>
    )
}