import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Button sx={{ color: "orange" }} colorScheme={"blue"}>
        Lorem ipsum dolor.
      </Button>
    </ChakraProvider>
  );
}

export default App;
