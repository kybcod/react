import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button leftIcon={<EmailIcon />}>Email</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
