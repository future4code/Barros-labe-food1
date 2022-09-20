import axios from "axios"

export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net'

export const appName = "rappi4A"


export const AdressRegistration = async ()=>{
    const {data} = await axios.put(
        `${BASE_URL}/${appName}/adress`,
        {
            headers:{
                auth: localStorage.getItem("ifuture.token")
            }
        }
        )
        return data
};

export const validateInput = input =>/[a-zA-Z0-9]+/.test(input)