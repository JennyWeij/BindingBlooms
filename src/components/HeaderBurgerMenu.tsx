import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="linear-gradient(to right, #000E19, #192B36)"
      h="100px"
      w="100%"
      top="0"
      position="fixed"
      zIndex="999"
    >
      <Flex align="center" justify="space-between" px={2}>
        <Image src="/images/Logotype.png" alt="Logo" height="100px" mt={0} />

        {/* Hamburger menu */}
        <Flex display={{ base: "flex", md: "none" }} align="center" ml="auto">
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="#000E19"
            bgColor="#B28767"
            _hover={{ bg: "#B28767", color: "#000E19" }}
            mr="10px"
            aria-label="Toggle menu"
            onClick={onToggle}
          />

          {/* Collapsible menu */}
          <Collapse in={isOpen} animateOpacity>
            <Flex direction="column" mt={2}>
              {/* Menu items */}
              <Link
                activeClass="active"
                to="our-flowers-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Text
                  as="button"
                  height="24px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  fontSize="18px"
                  fontWeight="semibold"
                  fontFamily="Baskerville"
                  bg="none"
                  color="#B28767"
                  cursor="pointer"
                  _hover={{ bg: "#B28767", color: "#192B36" }}
                >
                  Our flowers
                </Text>
              </Link>

              <Link
                activeClass="active"
                to="our-flowers-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Text
                  as="button"
                  height="24px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  fontSize="18px"
                  fontWeight="semibold"
                  bg="none"
                  color="#B28767"
                  fontFamily="Baskerville"
                  cursor="pointer"
                  _hover={{ bg: "#B28767", color: "#192B36" }}
                >
                  Our courses
                </Text>
              </Link>

              <Link
                activeClass="active"
                to="about-us-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Text
                  as="button"
                  height="24px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  fontSize="18px"
                  fontWeight="semibold"
                  bg="none"
                  color="#B28767"
                  fontFamily="Baskerville"
                  cursor="pointer"
                  _hover={{ bg: "#B28767", color: "#192B36" }}
                >
                  About us
                </Text>
              </Link>
            </Flex>
          </Collapse>
        </Flex>

        {/* Menu items */}
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          justify="space-between"
        >
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
              fontSize="25px"
              fontWeight="semibold"
              fontFamily="Baskerville"
              mr="40px"
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
              fontSize="25px"
              fontWeight="semibold"
              mr="40px"
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
              fontSize="25px"
              fontWeight="semibold"
              mr="40px"
              bg="none"
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
