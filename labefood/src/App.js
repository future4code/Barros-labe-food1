// import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import {
  ChakraProvider
} from "@chakra-ui/react";
import { LoginPage } from "./pages/login";
import { Router } from "./routes/router";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router/>
    </ChakraProvider>
  );
}
export default App;