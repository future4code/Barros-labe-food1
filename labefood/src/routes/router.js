import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import {SignupPage} from '../pages/signup'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/singup' element={<SignupPage />} />
                {/* <Route path='' element={}/>
                <Route path='' element={}/>
                <Route path='' element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}