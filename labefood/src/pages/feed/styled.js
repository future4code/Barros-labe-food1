import styled from "styled-components";


export const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;

  .title {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 2.813rem;
    height: 1.188rem;

    width: 10.938rem;
    height: 2.75rem;
    margin: 1.25rem 5.75rem 0 5.813rem;
    padding: 0.813rem 4.063rem 0.75rem;
  }

  .title p {
    width: 10.938rem;
    height: 2.75rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    align-self: center;
    text-align: center;
    color: #000;
    width: 10.938rem;
    height: 2.75rem;
  }

  .input {
    display: flex;
    align-items: center;
  }

  input {
    width: 20.5rem;
    height: 3.5rem;
    padding: 1rem 0.503rem 1rem 1.063rem;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    align-self: center;
    margin: 0 auto;
  }

  .tab-wrapper {
    align-items: center;
  }

  .card-wrapper {
    width: 20.5rem;
    height: 11.75rem;
    padding: 0 0 1rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
  }

  .card-image {
    width: 20.5rem;
    height: 50%;
    margin: 0 0 0.75rem;
    object-fit: contain;
  }
`;

