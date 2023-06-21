import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      padding={"4"}
      top="0"
      w="100%"
      fontFamily="Baskerville"
      fontSize={["13px", "16px", "20px"]}
      bg="linear-gradient(to right, #000E19, #192B36)"
      height={["50px", "70px", "100px"]}
    >
      <Flex justify={"space-between"} align="center">
        <Text color="#B28767">Footer</Text>
      </Flex>
    </Box>
  );
}
export default Footer;
