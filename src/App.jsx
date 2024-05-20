import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box m={1} bgColor={"tomato"}>
        lorem3
      </Box>
      <Box m={2} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={10} bgColor={"tomato"}>
        Doloribus illo, saepe.
      </Box>
      <Box m={20} bgColor={"tomato"}>
        Aut, eos officia.
      </Box>
    </ChakraProvider>
  );
}

export default App;
