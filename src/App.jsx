import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box p={"10px"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      {/*color(색상)*/}
      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <hr />
      {/*margin : m,mt,mb,ml,mr,mx,my*/}
      <Box m={"10px"} bgColor={"skyblue"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"skyblue"}>
        Dicta, magnam quaerat.
      </Box>
      <Box mb={"10px"} bgColor={"skyblue"}>
        Debitis, sit tenetur.
      </Box>
      <Box ml={"10px"} bgColor={"skyblue"}>
        Dolor, inventore, rerum?
      </Box>
      <Box mr={"10px"} bgColor={"skyblue"}>
        Aut, exercitationem, quisquam!
      </Box>
      <Box mx={"10px"} bgColor={"skyblue"}>
        Cumque molestiae, sint.
      </Box>
      <Box my={"10px"} bgColor={"skyblue"}>
        Nisi, saepe, voluptatibus?
      </Box>
      <hr />
      {/*padding : p, pt, pb, pl, pr, px, py*/}
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        A placeat, repellendus?
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Ab, eaque, voluptate!
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Illo ipsa, officia.
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Atque, dolorum, maxime?
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Maxime provident, quae!
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Eius, error temporibus.
      </Box>
      {/* w(넓이), h(높이) */}
      <hr />
      <Box w={"500px"}>Lorem ipsum dolor.</Box>
      <Box h={"300px"}>Atque, mollitia quos.</Box>
    </ChakraProvider>
  );
}

export default App;
