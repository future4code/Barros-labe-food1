import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FeedPage } from '../pages/feed';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/feed' element={<FeedPage/>}/>
                {/* <Route path='' element={}/>
                <Route path='' element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}