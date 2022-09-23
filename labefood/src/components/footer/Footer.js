import React from 'react';
import { ConteinerFooter} from './styledFooter';
import homePage from '../../img/imgFooter/homepage_2022-09-22/homepage@2x.png'
import shopping from '../../img/imgFooter/shopping-cart_2022-09-22/shopping-cart@2x.png'
import avatar from '../../img/imgFooter/avatar_2022-09-22/avatar@2x.png'
import { useNavigate } from 'react-router-dom';
import {goToFeedPage, goToCartPage, goToProfile} from '../../routes/coordinator'
import { useProtectPage } from '../../hooks/useProtectPage';

export  const Footer=()=> {
    useProtectPage();
    const navigate=useNavigate()
 return (
   <ConteinerFooter>
    <div>
        <img src={homePage} onClick={() => goToFeedPage (navigate)}/>
    </div>
    <div>
        <img src={shopping}
        onClick={() => goToCartPage (navigate)}
         />
    </div>
    <div>
        <img src={avatar}
        onClick={() => goToProfile (navigate)}
        />
    </div>
   </ConteinerFooter>
 );
}