import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtectPage } from '../../hooks/useProtectPage'
import { BASE_URL, appName } from '../../constants/index'
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { Span, ConteinerInput, Card, Restaurant, Detail, CardRestaurant, Main, Erro } from "./styledFeed";
import search from '../../img/imgFooter/search_2022-09-22/search@2x.png'


export const FeedPage = () => {
  useProtectPage();

  const [restaurants, setRestaurants] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  
  const navigate = useNavigate()
  
  const goToRestaurants = (id) => { navigate(`/restaurants/${id}`) };

  const token = localStorage.getItem("token")

  const getRestaurants = () => {
    axios.get(`${BASE_URL}/${appName}/restaurants`, {
      headers: { auth: token }
    }).then((response) => { setRestaurants(response.data.restaurants);     setIsLoading(!isLoading) })

    .catch((erro) => { console.log(erro) })
  }

    useEffect(() => { getRestaurants() }, [])
   

    //INPUT FILTRO
  const onChangeInput = (e) => { setInput(e.target.value) }

  const filteredRest = restaurants.filter((item)=>{
    return  item.name.toLowerCase().includes(input.toLowerCase())
  }).map((rest)=>{
    return(<Card onClick={() => goToRestaurants(rest.id)}>
    <img src={rest.logoUrl} alt='Restaurante' />
    <Restaurant>{rest.name}</Restaurant>
    <Detail>
      <p>{rest.deliveryTime} min</p>
      <h6>Frete R$:{rest.shipping},00</h6>
    </Detail>
  </Card> )
  })
  
  const dataTab = () => {
    return (
      <>
        <Tabs colorScheme="red">
          <TabList overflowX="auto">
            <Tab>Todos</Tab>
            <Tab>Árabe</Tab>
            <Tab>Asiática</Tab>
            <Tab>Baiana</Tab>
            <Tab>Carnes</Tab>
            <Tab>Hambúrguer</Tab>
            <Tab>Italiana</Tab>
            <Tab>Mexicana</Tab>
            <Tab>Petiscos</Tab>
            <Tab>Sorvetes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {filteredRest}

            
            </TabPanel>
            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return (input ? rest.name.toLowerCase().includes(input.toLowerCase()) : rest.category === "Árabe")
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>
            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return (
                       input ? rest.name.toLowerCase().includes(input.toLowerCase())  : rest.category === "Asiática"
                    );
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>
            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                      ? rest.name.toLowerCase().includes(input.toLowerCase())
                      : rest.category === "Baiana";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>
            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                    ? 
                    rest.name.toLowerCase().includes(input.toLowerCase())
                    :
                     rest.category === "Carnes";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>

            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                      ? rest.name.toLowerCase().includes(input.toLowerCase())
                      : rest.category === "Hamburguer";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>

            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                      ? rest.name.toLowerCase().includes(input.toLowerCase())
                      : rest.category === "Italiana";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>

            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                      ? rest.name.toLowerCase().includes(input.toLowerCase())
                      : rest.category === "Mexicana";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <p>Frete R$:{rest.shipping},00</p>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>

            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                      ? rest.name.toLowerCase().includes(input.toLowerCase())
                      : rest.category === "Petiscos";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>
            <TabPanel>
              {restaurants &&
                restaurants
                  .filter((rest) => {
                    return input
                      ? rest.name.toLowerCase().includes(input.toLowerCase())
                      : rest.category === "Sorvetes";
                  })
                  .map((rest) => {
                    return (
                      <Card onClick={() => goToRestaurants(rest.id)}>
                        <img src={rest.logoUrl} alt="Restaurante" />
                        <Restaurant>{rest.name}</Restaurant>
                        <Detail>
                          <p>{rest.deliveryTime} min</p>
                          <h6>Frete R$:{rest.shipping},00</h6>
                        </Detail>
                      </Card>
                    );
                  })}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    );
  }

  return (
    <Main>
      <Span>
        <div>Ifuture</div>
      </Span>

      <ConteinerInput>
        <input
          value={input}
          onChange={onChangeInput}
          placeholder="Busca"
          type="text"
        ></input>
        <span>
          <img src={search} alt="busca" />
        </span>
      </ConteinerInput>

      {dataTab()}

      {!isLoading && filteredRest.length === 0 && <Erro>Não encontramos :( </Erro>}
      {isLoading && <Erro>Carregando...</Erro>}
      
      <Footer />
    </Main>
  );



}
