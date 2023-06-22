import { Box, Flex, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      h={["47px", "50px", "80px"]}
      position="fixed"
      top="0"
      width="100%"
      bg="linear-gradient(to right, #000E19, #192B36)"
      px={4}
      py={2}
    >
      <Flex align="center" justify="space-between">
        <Image src="/images/Logotype.png" alt="Logo" height="90px" ml={10} />
        <Flex>
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="8px"
            borderRadius="2px"
            fontSize="20px"
            fontWeight="semibold"
            fontFamily="Baskerville"
            mr={20}
            bg="none"
            color="#B28767"
            _hover={{ bg: "none" }}
          >
            Our flowers
          </Box>

          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="8px"
            borderRadius="2px"
            fontSize="20px"
            mr={20}
            fontWeight="semibold"
            bg="none"
            color="#B28767"
            fontFamily="Baskerville"
            _hover={{ bg: "none" }}
          >
            Our courses
          </Box>

          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="8px"
            borderRadius="2px"
            fontSize="20px"
            fontWeight="semibold"
            bg="none"
            mr={80}
            color="#B28767"
            fontFamily="Baskerville"
            _hover={{ bg: "none" }}
          >
            About us
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
