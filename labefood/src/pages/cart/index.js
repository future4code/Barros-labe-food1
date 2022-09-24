import { Footer } from "../../components/footer/Footer"
import { useProtectPage } from "../../hooks/useProtectPage"

export const CartPage = () =>{
    useProtectPage();
    return(
        <>
        
        <h1>Cart Page</h1>

        <Footer/>
        </>
    )
}