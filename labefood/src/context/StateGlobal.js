import React,{useState,} from "react";
import {Router} from '../routes/router'
import {CartContext} from './Context'

const StateGlobal =()=>{

    const [cart, setCart ] = useState([]);
    const [ quantity, setQuantity ] = useState()


    return(
        <CartContext.Provider value={{cart, setCart, quantity, setQuantity}}>
        <Router/>
        </CartContext.Provider>
    )
}

export default StateGlobal;