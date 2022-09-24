import styled from "styled-components";

export const MainConteiner=styled.main`


div{
    
    display: flex;
    justify-content: space-between;
    width: 0%;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
}

.title{
    width: 10.938rem;
    height: 2.75rem;
    margin-top: 1.25rem;
    margin-left: 5.90rem;

}

.go-back-button {
    align-self: flex-start;
    margin-top: 1.0rem;
    margin-left: 1rem;

  }

  .go-back-button svg {
    width: 1.44rem;
    height: 1.5rem;
  }

`


export const Title=styled.h1`
  width: 5.25rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;
`

export const Detail = styled.section`


    

    img{
    width: 20.5rem;
    height: 7.5rem;
    margin: 2rem 1rem 0.75rem;
    object-fit: contain;
    }
.name-restaurant{
    width: 20.5rem;
    height: 1.125rem;
    margin: 0.75rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
    }
`