// import axios from "axios";

// const api = axios.create({
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         client_id: process.env.CLIENT_ID,
//     },
// baseURL: process.env.API_URL,
// });

// export default api;

// async function refreshToken(error) {
// return new Promise((resolve, reject) => {
//     try {
//     const refresh_token = localStorage.getItem("refresh_token");
//     const header = {
//         "Content-Type": "application/json",
//         Authorization: process.env.AUTHORIZATION,
//     };
//     const parameters = {
//         method: "POST",
//         headers: header,
//     };
//     const body = {
//         grant_type: "refresh_token",
//         refresh_token,
//     };
//     axios
//         .post(
//         process.env.API_URL + "/refreshtoken",
//         body,
//         parameters
//         )
//         .then(async (res) => {
//         localStorage.setItem("access_token", res.data.access_token);
//         localStorage.setItem("refresh_token", res.data.refresh_token);
//         // Fazer algo caso seja feito o refresh token
//         return resolve(res);
//         })
//         .catch((err) => {
//         // Fazer algo caso não seja feito o refresh token
//         return reject(error);
//         });
//     } catch (err) {
//     return reject(err);
//     }
// });
// };