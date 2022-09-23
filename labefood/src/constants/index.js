import axios from "axios"

export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net'

export const appName = "rappi4A"

const token = localStorage.getItem('token')
console.log(token);



export const AddressRegistration = async (body)=>{
    const {data} = await axios.put(
        console.log(body)
        `${BASE_URL}/${appName}/address`, body,
        {
            headers:{
                auth: token
            }
        }
        )
        return data
    };

export const validateInput = input =>/[a-zA-Z0-9]+/.test(input)