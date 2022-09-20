import { useProtectPage } from "../../hooks/useProtectPage";

export const AdressRegistrationPage = () =>{
    useProtectPage();
    return(
        <h1>Adress Registration Page</h1>
    )
}