import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
