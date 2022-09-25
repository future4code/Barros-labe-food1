// import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/login";
import { Router } from "./routes/router";
import { CartContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <CartContext.Provider value={{ cart, setCart }}></CartContext.Provider>
      <Router />
    </ChakraProvider>
  );
}
export default App;
