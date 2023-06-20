import { Box, Flex } from "@chakra-ui/react";

function CoursesPage() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <img
        src="/images/flowertable.jpg"
        alt="Background Image"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />
      <Box
        position="absolute"
        textAlign="center"
        mt="250px"
        fontSize="100px"
        fontWeight="bold"
        fontFamily="Baskerville"
        color="white"
      >
        Our courses
      </Box>
    </Flex>
  );
}

export default CoursesPage;
