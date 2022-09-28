import React,{useState,} from "react";
import {Router} from '../routes/router'
import {CartContext} from './Context'

const StateGlobal =()=>{

    const [cart, setCart ] = useState([]);
    const [ quantities, setQuantities ] = useState()


    return(
        <CartContext.Provider value={{cart, setCart, quantities, setQuantities}}>
        <Router/>
        </CartContext.Provider>
    )
}

export default StateGlobal;