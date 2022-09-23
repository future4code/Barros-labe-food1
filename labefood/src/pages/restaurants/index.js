import { Footer } from "../../components/footer/Footer"
import { useProtectPage } from "../../hooks/useProtectPage"


export const RestaurantsPage = () =>{
    useProtectPage();
    return(
        <>
        <h1>Restaurants Page</h1>
        
        
        <Footer/>
        </>
    )
}