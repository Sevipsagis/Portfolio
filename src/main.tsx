import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import App from "./App";

// apply root css
import "./index.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme: ThemeConfig = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#EDE0D4",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
