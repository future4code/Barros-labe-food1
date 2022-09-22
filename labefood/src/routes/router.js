import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FeedPage } from '../pages/feed';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import {SignupPage} from '../pages/signup';
import {AdressRegistrationPage} from "../pages/adressRegistration/index"
import { RestaurantsPage} from '../pages/restaurants/index'
import { CartPage } from '../pages/cart';

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/feed' element={<FeedPage/>}/>
                <Route path='/restaurants/:restauranteId' element={<RestaurantsPage/>}/>
                <Route path='/adress' element={< AdressRegistrationPage />}/>
                <Route path='/cart' element={<CartPage />}/>
            </Routes>
        </BrowserRouter>
    )
}