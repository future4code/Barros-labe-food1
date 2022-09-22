import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtectPage } from '../../hooks/useProtectPage'
import { BASE_URL, appName } from '../../constants/index'
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { Span, ConteinerInput,Card, Restaurant, Detail } from "./styledFeed";


export const FeedPage = () => {
  useProtectPage();

  const [restaurants, setRestaurants] = useState([])
  const [input, setInput] = useState("")
  

  const navigate = useNavigate()
  const goToRestaurants = (id) => { navigate(`/restaurants/${id}`)};

  const token = localStorage.getItem("token")

  const getRestaurants = () => {
    axios.get(`${BASE_URL}/${appName}/restaurants`, {
      headers: { auth: token }
    }).then((response) => { setRestaurants(response.data.restaurants); console.log(response) })
      .catch((erro) => { console.log(erro) })
  }

  useEffect(() => { getRestaurants() }, [])

  const onChangeInput = (e) => { setInput(e.target.value) }



  return (
    <>

    <Span>
      <div>
        Ifuture
      </div>
    </Span>

      <ConteinerInput>
      <input
        onChange={onChangeInput}
        placeholder="Busca"
      ></input>
      </ConteinerInput>
      <Tabs colorScheme='red'>
 
        <TabList overflowX="auto" >
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
            {restaurants && restaurants.map((i) => {
              return (
                <Card onClick={() => { goToRestaurants(i.id) }}>
                  <img src={i.logoUrl} alt='Restaurante' />
                  <Restaurant>{i.name}</Restaurant>
                  <Detail>
                  <p>{i.deliveryTime} min</p>
                  <h6>Frete R$:{i.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Árabe"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Asiática"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Baiana"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })
            }
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Carnes"
            }).map((rest) => {
              return (
                <Card>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })
            }
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Hamburguer"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Italiana"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Mexicana"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <p>Frete R$:{rest.shipping},00</p>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Petiscos"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Sorvetes"
            }).map((rest) => {
              return (
                <Card onClick={() => goToRestaurants(rest.id)}>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <Restaurant>{rest.name}</Restaurant>
                  <Detail>
                  <p>{rest.deliveryTime} min</p>
                  <h6>Frete R$:{rest.shipping},00</h6>
                  </Detail>
                </Card>
              )
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );



}
