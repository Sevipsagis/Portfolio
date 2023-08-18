import { RouterProvider } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import router from "./routes";

function App() {
  return (
    <Container maxW='full' centerContent>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
