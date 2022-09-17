import styled from "styled-components";

export const SignupContainer = styled.main`
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

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        letter-spacing: -0.39px;
        text-align: center;
        padding: 0.75rem 2rem;
    }

    form{
        width: 22.5rem;

        button{
            width: 100%;
        }

        input{
            /* height: 3.5rem; */
            margin: 0.5rem 0 0;
            /* padding: 1.188rem 3rem 1.188rem 1rem; */
            position: relative;
            z-index: 1;
            margin-bottom: 0.5rem;
            border-color: #b8b8b8;
        }

        label {
            position: absolute;
            top: -6%;
            left: 5%;
            background-color: white;
            z-index: 2;
            color: #b8b8b8;
        }

        p{
            margin: 1% 0;
        }
    }
`