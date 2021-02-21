import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import initAuth from "../utils/initAuth";
import theme from "../utils/theme";
import "../styles/globals.css";

initAuth();

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
