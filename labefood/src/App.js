// import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles";
import {
  ChakraProvider
} from "@chakra-ui/react";
import { FormContainer } from "./components/styled-containers";
import { LoginPage } from "./pages/login";


function App() {
  return (
    <ChakraProvider theme={theme}>
        <LoginPage/>

    </ChakraProvider>
  );
}

export default App;
