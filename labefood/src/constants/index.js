import axios from "axios"
export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net'
export const appName = "rappi4A"

// validação de input para o endereço
export const validateInput = input =>/[a-zA-Z0-9]+/.test(input)

//axios put para o endereço
const token = localStorage.getItem('token')

export const AddressRegistration = async (body)=>{
    const {data} = await axios.put(
        // console.log(body)
        `${BASE_URL}/${appName}/address`, body,
        {
            headers:{
                auth: token
            }
        }
        )
        return (localStorage.setItem('token', data.token))
    };


export const updateProfile = (body) => {
    const {data} = axios.put(
        `${BASE_URL}/${appName}/profile`, body,
        {
            headers:{
                auth: token
            }
        }
    )
    return data
};