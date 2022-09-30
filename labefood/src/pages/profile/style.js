import styledEngine from "@mui/styled-engine"
import styled from "styled-components"


export const ProfileContainer = styled.main`
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
    flex-direction: column;
    min-height: 100vh;
    padding: 0 0 1.625rem;
    h1, h2, h3{
        font-family: "Roboto", sans-serif;
    }
    `
    // bg="blackAlpha.100" alignItems="flex-start" width="100%" padding="10px"
export const UserAddress = styled.div`
    background-color: #eee;
    display:flex;
    justify-content:space-between;
    padding:0 20px;
    
p{
    color: #b8b8b8;
    padding: 10px 0
}

`
export const UserRequests = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:10px;
section{
    padding:20px;
}
`


export const UserInfo = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    button{
        margin-bottom:40px;
    }
`

export const Spin = styled.div`
    margin: 0 auto;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(farthest-side,#E8222E 94%,#0000) top/9px 9px no-repeat,
            conic-gradient(#0000 30%,#E8222E);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
    animation: spinner-c7wet2 1s infinite linear;

    @keyframes spinner-c7wet2 {
    100% {
        transform: rotate(1turn);
    }
}
`

export const Erro=styled.h4`
    font-family: Roboto;
    text-align: center;

`