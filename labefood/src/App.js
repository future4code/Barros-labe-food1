// import { ChakraProvider } from "@chakra-ui/react";
import react from "react";
import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/login";
import { Router } from "./routes/router";
import { CartContext } from "./context/Context";
import { useState } from "react";
import StateGlobal from "./context/StateGlobal";

function App() {
  // const [cart, setCart ] = useState([]);
  // const [ quantity, setQuantity ] = useState()

  return (
    <ChakraProvider theme={theme}>

    <StateGlobal>
    <Router/>
    </StateGlobal>
    
    </ChakraProvider>
    
    );
  }
  export default App;
  
  //   <CartContext.Provider
  //     value={{ cart, setCart, quantity, setQuantity }}
  //   >
  // <ChakraProvider theme={theme}>
  //   <Router />
  // </ChakraProvider>
  //   </CartContext.Provider>