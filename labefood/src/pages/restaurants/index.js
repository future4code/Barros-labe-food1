import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer"
import { appName, BASE_URL } from "../../constants";
import { useProtectPage } from "../../hooks/useProtectPage"


export const RestaurantsPage = () =>{
    useProtectPage();
    // const params =useParams

    // const [detail, setDetail]=useState()


    // const detailRestaurant=()=>{
    //     axios.get(`${BASE_URL}/${appName}/restaurants/${params.id}`, {
    //         headers:{
    //             auth: localStorage.getItem("token")        
    //         }
    //     }).then((response)=>{})
    // } 
    return(
        <>
        <h1>Restaurants Page</h1>
        
        
        <Footer/>
        </>
    )
}