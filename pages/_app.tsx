import { ChakraProvider } from "@chakra-ui/react";
import initAuth from "../utils/initAuth";
import "../styles/globals.css";

initAuth();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
