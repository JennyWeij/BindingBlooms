import { Box, Flex } from "@chakra-ui/react";

function AboutPage() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <img
        src="/images/flowerpicture.jpg"
        alt="Background Image"
        style={{ width: "100%", height: "100vh", objectFit: "inherit" }}
      />
      <Box
        position="absolute"
        textAlign="center"
        // mt="250px"
        fontSize="100px"
        fontWeight="bold"
        fontFamily="Baskerville"
        color="white"
      >
        About us
      </Box>
    </Flex>
  );
}

export default AboutPage;
