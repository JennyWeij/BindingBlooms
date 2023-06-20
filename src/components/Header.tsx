import { Box, Button, Flex, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      h={["47px", "50px", "80px"]}
      position="sticky"
      top="0"
      width="100%"
      bg="linear-gradient(to right, #000E19, #192B36)"
      px={4}
      py={2}
      zIndex="sticky"
    >
      <Flex align="center" justify="space-between">
        <Image src="/images/Logotype.png" alt="Logo" height="90px" ml={10} />
        <Flex>
          {/* <Link to="/flowers"> */}
          <Button
            variant="ghost"
            colorScheme="blackAlpha"
            mr={40}
            fontFamily="Baskerville"
            color="#B28767"
            fontSize={20}
          >
            Our Flowers
          </Button>
          {/* </Link> */}
          {/* <Link to="/courses"> */}
          <Button
            variant="ghost"
            colorScheme="blackAlpha"
            mr={40}
            fontFamily="Baskerville"
            color="#B28767"
            fontSize={20}
          >
            Our Courses
          </Button>
          {/* </Link> */}
          {/* <Link to="/about"> */}
          <Button
            variant="ghost"
            // colorScheme="yellow"
            mr={80}
            fontFamily="Baskerville"
            color="#B28767"
            fontSize={20}
          >
            About Us
          </Button>
          {/* </Link> */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
