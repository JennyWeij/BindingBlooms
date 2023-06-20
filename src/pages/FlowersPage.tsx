import { Box, Flex } from "@chakra-ui/react";

function FlowersPage() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <img
        src="/images/flowerfield.jpg"
        alt="Background Image"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />
      <Box
        position="absolute"
        textAlign="center"
        fontSize="100px"
        color="#B28767"
        fontWeight="bold"
        fontFamily="Baskerville"
      >
        Our flowers
      </Box>
    </Flex>
  );
}

export default FlowersPage;
