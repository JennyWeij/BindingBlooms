import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Header() {
  return (
    <Box
      h={["47px", "50px", "80px"]}
      position="fixed"
      overflowY="hidden"
      zIndex={10}
      top="0"
      width="100%"
      bg="linear-gradient(to right, #000E19, #192B36)"
      py={12}
    >
      <Flex align="center" justify="space-between">
        <Image
          src="/images/Logotype.png"
          alt="Logo"
          height="100px"
          mt={0}
          ml={50}
        />
        <Flex>
          <Link
            activeClass="active"
            to="our-flowers-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Box
              as="button"
              height="24px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              px="8px"
              borderRadius="2px"
              fontSize="25px"
              fontWeight="semibold"
              fontFamily="Baskerville"
              mr={20}
              bg="none"
              color="#B28767"
              cursor="pointer"
              _hover={{ bg: "none" }}
            >
              Our flowers
            </Box>
          </Link>

          <Link
            activeClass="active"
            to="our-flowers-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Box
              as="button"
              height="24px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              px="8px"
              borderRadius="2px"
              fontSize="25px"
              // mr={20}
              fontWeight="semibold"
              bg="none"
              color="#B28767"
              fontFamily="Baskerville"
              cursor="pointer"
              _hover={{ bg: "none" }}
            >
              Our courses
            </Box>
          </Link>

          <Link
            activeClass="active"
            to="about-us-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Box
              as="button"
              height="24px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              px="8px"
              borderRadius="2px"
              fontSize="25px"
              fontWeight="semibold"
              bg="none"
              mr={80}
              color="#B28767"
              fontFamily="Baskerville"
              cursor="pointer"
              _hover={{ bg: "none" }}
            >
              About us
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
