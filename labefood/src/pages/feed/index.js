import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtectPage } from '../../hooks/useProtectPage'
import { BASE_URL, appName } from '../../constants/index'
import { useNavigate } from "react-router-dom";
import { goToRestaurants } from "../../routes/coordinator";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export const FeedPage = () => {
  useProtectPage();

  const [restaurants, setRestaurants] = useState([])
  const [input, setInput] = useState("")
  const [category, setCategory] = useState(0)
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const getRestaurants = () => {
    axios.get(`${BASE_URL}/${appName}/restaurants`, {
      headers: { auth: token }
    }).then((response) => { setRestaurants(response.data.restaurants); console.log(response) })
      .catch((erro) => { console.log(erro) })
  }

  useEffect(() => { getRestaurants() }, [])

  const onChangeInput = (e) => { setInput(e.target.value) }


  // const feedRestaurants = () => {

  //   if (category === 0) {

  //     return (
  //       <section value={category} index={0}>
  //         <div
  //          onClick={()=>{goToRestaurants(navigate)}}
  //         >
  //           {restaurants && restaurants.map((i) => {
  //             return (
  //               <div  onClick={()=>{goToRestaurants(navigate)}}>
  //                 <img src={i.logoUrl} alt='Restaurante' />
  //                 <p>{i.name}</p>
  //                 <p>{i.deliveryTime}</p>
  //                 <p>{i.shipping}</p>
  //               </div>
  //             )
  //           })}
  //         </div>
  //       </section>
  //     )
  //   }
  //   else if(category === 1) {
  //     <section value={category} index={1}>

  //       <div
  //       //  onClick={(i)=>{goToRestaurante (navigate, i.id)}}
  //       >
  //         {restaurants && restaurants.filter((rest) => {
  //           return rest.category === "Árabe"
  //         }).map((rest) => {
  //           console.log(rest.category)
  //           return (
  //             <div>
  //               <img src={rest.logoUrl} alt='Restaurante' />
  //               <p>{rest.name}</p>
  //               <p>{rest.deliveryTime}</p>
  //               <p>{rest.shipping}</p>
  //             </div>
  //           )
  //         })
  //         }

  //       </div>

  //     </section>
  //   }
  //   else if(category === 2){
  //     <section value={category} index={2}>
  //   <div
  //   //  onClick={(i)=>{goToRestaurante (navigate, i.id)}}
  //   >
  //     {restaurants && restaurants.filter((rest) => {
  //       return rest.category === "Asiática"
  //     }).map((rest) => {
  //       console.log(rest.category)
  //       return (
  //         <div>
  //           <img src={rest.logoUrl} alt='Restaurante' />
  //           <p>{rest.name}</p>
  //           <p>{rest.deliveryTime}</p>
  //           <p>{rest.shipping}</p>
  //         </div>
  //       )
  //     })
  //     }

  //   </div>

  // </section>

  //   }
  //   else if(category === 3){
  //     <section value={category} index={2}>
  //   <div
  //   //  onClick={(i)=>{goToRestaurante (navigate, i.id)}}
  //   >
  //     {restaurants && restaurants.filter((rest) => {
  //       return rest.category === "Baiana"
  //     }).map((rest) => {
  //       console.log(rest.category)
  //       return (
  //         <div>
  //           <img src={rest.logoUrl} alt='Restaurante' />
  //           <p>{rest.name}</p>
  //           <p>{rest.deliveryTime}</p>
  //           <p>{rest.shipping}</p>
  //         </div>
  //       )
  //     })
  //     }

  //   </div>
  // </section>

  //   }

  // }


  return (
    <>
      <input
        onChange={onChangeInput}
        placeholder="Busca"
      ></input>
      <Tabs>

        <TabList variant='scrollable' scrollButtons="auto">
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
                <div onClick={() => { goToRestaurants(navigate) }}>
                  <img src={i.logoUrl} alt='Restaurante' />
                  <p>{i.name}</p>
                  <p>{i.deliveryTime}</p>
                  <p>{i.shipping}</p>
                </div>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Árabe"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Asiática"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Baiana"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })
            }
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Carnes"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })
            }
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Hamburguer"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Italiana"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Mexicana"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>

          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Petiscos"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>
          <TabPanel>
            {restaurants && restaurants.filter((rest) => {
              return rest.category === "Sorvetes"
            }).map((rest) => {
              console.log(rest.category)
              return (
                <div>
                  <img src={rest.logoUrl} alt='Restaurante' />
                  <p>{rest.name}</p>
                  <p>{rest.deliveryTime}</p>
                  <p>{rest.shipping}</p>
                </div>
              )
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );



}
