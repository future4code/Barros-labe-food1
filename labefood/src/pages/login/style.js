import styled from "styled-components";
// export const LoginPageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   flex-direction: column;
//   img {
//     margin: 4.25rem 8rem 1rem;
//     margin: 5.5rem 8rem;
//     margin-bottom: 2rem;
//     width: 6.5rem;
//     height: 3.625rem;
//     object-fit: contain;
//   }
//   .title {
//     display: flex;
//     width: 22.5rem;
//     height: 2.625rem;
//     margin: 1rem 0 0;
//     padding: 0.75rem 2rem;
//   }
//   .text {
//     width: 18.5rem;
//     height: 1.125rem;
//     font-family: Roboto;
//     font-size: 1rem;
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: normal;
//     letter-spacing: -0.39px;
//     text-align: center;
//     color: #000;
//   }
//   button {
//     width:100%;
//     height: 2.625rem;
//     margin-bottom: 1rem;
//     color: #000;
//   }
// `;


export const LoginPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1.625rem;


  img {
    width: 6.5rem;
    height: 3.625rem;
    margin: 1.5rem 8rem 1rem;
    object-fit: contain;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    padding: 0.75rem 2rem;
  }

  form {
    width: 22.5rem;
    margin-bottom: 5rem;

    button {
      width: 100%;
      padding: 0.75rem 1rem;
       color: black;
       margin-top: 1rem;
    }

    input {
      /* height: 3.5rem; */
      margin: 1rem 0 0;
      /* padding: 1.188rem 3rem 1.188rem 1rem; */
      position: relative;
      z-index: 1;
      border-color: #b8b8b8;
      height: 3.5rem;
     
    }

    label {
      position: absolute;
      top: 3%;
      left: 5%;
      background-color: white;
      z-index: 2;
      color: #b8b8b8;
    }
    `;
