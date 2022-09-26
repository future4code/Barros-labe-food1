// import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/login";
import { Router } from "./routes/router";
import { CartContext } from "./context/Context";
import { useState } from "react";
import React, { useContext } from "react";

function App() {
  const [cart, setCart ] = useState([]);
  const [ quantity, setQuantity ] = useState()

  return (
      <CartContext.Provider
        value={{ cart, setCart, quantity, setQuantity }}
      >
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
      </CartContext.Provider>
  );
}
export default App;
