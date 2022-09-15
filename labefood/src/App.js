// import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import {
  ChakraProvider
} from "@chakra-ui/react";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <LoginPage/>
    </ChakraProvider>
  );
}
export default App;