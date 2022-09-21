import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtectPage } from "../../hooks/useProtectPage";
import { BASE_URL, appName } from "../../constants/index";
import { useNavigate } from "react-router-dom";
// import { goToRestaurants } from "../../routes/coordinator";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FeedContainer } from "./styled";

export const FeedPage = () => {
  useProtectPage();

  const [restaurants, setRestaurants] = useState([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();


  const token = localStorage.getItem("token");

  const goToRestaurants = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/${appName}/restaurants`, {
        headers: { auth: token },
      })
      .then((response) => {
        setRestaurants(response.data.restaurants);
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <FeedContainer>
      <Tabs width="100vw" height="100vh" >
      <div className="title"><p>IFuture</p></div>
      <div className="input">
      <input onChange={onChangeInput} placeholder="Busca"></input>
      </div>
        <TabList overflowX="scroll" width="100%">
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
          <TabPanel width="20.5rem" height="11rem">
            {restaurants &&
              restaurants.map((i) => {
                return (
                  <div className="card-wrapper">
                    <div
                      className="card-image"
                      onClick={() => goToRestaurants(i.id)}
                    >
                      <img src={i.logoUrl} alt="Restaurante" />
                    </div>
                    <div className="card-name">
                      <p>{i.name}</p>
                    </div>
                    <div className="card-data">
                      <p>{i.deliveryTime}</p>
                      <p>{i.shipping}</p>
                    </div>
                  </div>
                );
              })}
          </TabPanel>
          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Árabe";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>
          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Asiática";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>
          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Baiana";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>
          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Carnes";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>

          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Hamburguer";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>

          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Italiana";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>

          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Mexicana";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>

          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Petiscos";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>
          <TabPanel>
            {restaurants &&
              restaurants
                .filter((rest) => {
                  return rest.category === "Sorvetes";
                })
                .map((rest) => {
                  console.log(rest.category);
                  return (
                    <div onClick={() => goToRestaurants(rest.id)}>
                      <img src={rest.logoUrl} alt="Restaurante" />
                      <p>{rest.name}</p>
                      <p>{rest.deliveryTime}</p>
                      <p>{rest.shipping}</p>
                    </div>
                  );
                })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FeedContainer>
  );
};
