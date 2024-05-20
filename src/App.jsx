import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      {/*Responsive Styles*/}
      <Box bgColor={"orange"} w={"500px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"yellow.700"} w={{ base: "100%", md: "500px" }}>
        Lorme ipsum dolor.
      </Box>
    </ChakraProvider>
  );
}

export default App;
