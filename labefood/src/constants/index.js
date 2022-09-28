import axios from "axios"
export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net'
export const appName = "rappi4A"

// validação de input para o endereço
export const validateInput = input =>/[a-zA-Z0-9]+/.test(input)




