import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer"
import { appName, BASE_URL } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage"
import { Card, Restaurant, Detail, CardRestaurant,} from "../feed/styledFeed";

export const RestaurantsPage = () =>{
    useProtectPage();
    const parametro =useParams();
    
    const [states, setStates]=useState([]);
    
    const token = localStorage.getItem("token");
    

    const detailRestaurant=()=>{
        axios.get(`${BASE_URL}/${appName}/restaurants/${parametro.restauranteId}`, {
            headers:{ auth: token }
        }).then((response)=>{ setStates(response.data.restaurant);})
        .catch((erro)=>{console.log(erro)})
    } 

    useEffect(() => { detailRestaurant() }, [])

    return(
        <>
        <h1>Restaurants Page</h1>
      
        <p>{states.name}</p>
        <img src={states.logoUrl}/>

        {states.products && states.products.map((i) => {
                return (
                  <div>
                    <div>
                  
                      <img src={i.photoUrl} alt='Produtos' />
                      <p>{i.name}</p>
                      <div>
                        <p>{i.description}</p>
                        <h6>Preço R$:{i.price}</h6>
                      </div>
                    </div>
                  </div>
                )
              })}
        
            
        <Footer/>
        </>
    )
}
