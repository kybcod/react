import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleButtonClick(e) {
    //event bubbling 멈추기
    e.stopPropagation();
    console.log("버튼 클릭");
  }

  function handleBoxClick() {
    console.log("박스 클릭");
  }

  return (
    <ChakraProvider>
      <Box
        onClick={handleBoxClick}
        w={"100px"}
        h={"100px"}
        bgColor={"orange.200"}
      >
        <Button onClick={handleButtonClick}>클릭</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
