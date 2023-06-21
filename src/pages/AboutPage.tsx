import { Box, Flex } from "@chakra-ui/react";

function AboutPage() {
  return (
    <Flex
      bg="linear-gradient(to right, #000E19, #192B36)"
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <img
        src="/images/flowerpicture.jpg"
        alt="Background Image"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "inherit",
          marginTop: "100px",
          marginBottom: "120px",
        }}
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
