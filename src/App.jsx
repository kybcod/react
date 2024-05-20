import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      {/*버튼의 색 적용*/}
      <div>
        <Button colorScheme={"gray"}>Gray</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Quaerat.</Button>
        <Button colorScheme={"blue"}>Voluptatem.</Button>
        <Button colorScheme={"yellow"}>Culpa!</Button>
        <Button colorScheme={"green"}>Quaerat.</Button>
        <Button colorScheme={"teal"}>Neque.</Button>
        <Button colorScheme={"pink"}>Expedita?</Button>
        <Button colorScheme={"cyan"}>Quam!</Button>
        <Button colorScheme={"purple"}>Quia?</Button>
        <hr />
        {/*로딩 표시*/}
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem.
        </Button>
        <hr />
        {/* 버튼 다양한 스타일 : solid, outline, ghost, link*/}
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Modi.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Beatae.
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Qui!
        </Button>
        <hr />
      </div>
    </ChakraProvider>
  );
}

export default App;
