import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 20.5rem;
  height: 7rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

  .image {
    /* background-image: url(${(props) => props.bgImage}); */
    display: flex;
    align-items: center;
    width: 6rem;
    height: 7rem;
    margin: 0 1rem 0 0;
    object-fit: contain;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }

  h1 {
    width: 10.438rem;
    height: 1.125rem;
    margin: 1.125rem 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
  }

  .info p:nth-child(2) {
    width: 12.5rem;
    height: 1.875rem;
    /* margin: 0.5rem 1rem 0.25rem; */
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
  }

  .info p:nth-child(3) {
    width: 7.375rem;
    height: 1.188rem;
    margin: 1rem 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }

  .buttons {
    display: flex;
    width: 10%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
  }

  .buttons span {
    display: flex;
    align-items: center;
    width: 2.063rem;
    height: 2.063rem;
    margin: 0 0 0.688rem 1rem;
    padding: 0.438rem 0.75rem;
    border-radius: 0px 8px;
    border: solid 1px #e8222e;
    color: #e8222e;
  }

  .buttons .remove-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.625rem;
    height: 1.938rem;
    margin: 0.438rem 0 0 0.5rem;
    padding: 0.5rem 1.438rem 0.563rem 1.5rem;
    border-radius: 8px 0px;
    border: solid 1px #e02020;
  }

  .buttons .add-button {
    display: flex;

    align-items: center;
    justify-content: center;
    width: 5.625rem;
    height: 1.938rem;
    margin: 0.438rem 0 0 0.5rem;
    padding: 0.5rem 1.438rem 0.563rem 1.5rem;
    border-radius: 8px 0px;
    border: solid 1px #000;
  }

  .buttons .remove-button p {
    width: 3.5rem;
    height: 0.875rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: #e02020;
  }

  .buttons .add-button p {
    width: 3.5rem;
    height: 0.875rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: #000;
  }

  .close-button {
    width: 1rem;
    height: 1rem;
    border-radius: 0;
    border: none;
  }
`;
