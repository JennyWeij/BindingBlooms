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
      w="100%"
      top="0"
      position="fixed"
      h={["45px", "70px", "100px"]}
      zIndex="999"
    >
      <Flex align="center" justify="space-between" px={2}>
        <Image
          src="/images/Logotype.png"
          alt="Logo"
          height={["43px", "70px", "100px"]}
          mt={0}
          ml="45px"
        />

        {/* Hamburger menu */}
        <Flex display={{ base: "flex", md: "none" }} align="center" ml="auto">
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="#B28767"
            bgColor="none"
            fontSize="10px"
            _hover={{ bg: "none", color: "#000E19" }}
            aria-label="Toggle menu"
            onClick={onToggle}
          />

          {/* Collapsible menu */}
          <Collapse in={isOpen} animateOpacity>
            <Flex direction="row">
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
                  height={["12px", "24px"]}
                  mr="7px"
                  transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                  fontSize={["10px", "16px"]}
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
                to="our-courses-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Text
                  as="button"
                  height={["12px", "24px"]}
                  mr="7px"
                  transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                  fontSize={["10px", "16px"]}
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
                  height={["12px", "24px"]}
                  mr="7px"
                  transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                  fontSize={["10px", "16px"]}
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
            offset={50}
            duration={500}
          >
            <Box
              as="button"
              height="24px"
              lineHeight="1.2"
              transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
              fontSize="25px"
              fontWeight="semibold"
              fontFamily="Baskerville"
              mr="40px"
              bg="none"
              color="#B28767"
              cursor="pointer"
              _hover={{ textShadow: "12px 12px 14px rgba(0, 0, 0, 1.5)" }}
            >
              Our flowers
            </Box>
          </Link>

          <Link
            activeClass="active"
            to="our-courses-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Box
              as="button"
              height="24px"
              lineHeight="1.2"
              transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
              fontSize="25px"
              fontWeight="semibold"
              mr="40px"
              bg="none"
              color="#B28767"
              fontFamily="Baskerville"
              cursor="pointer"
              _hover={{ textShadow: "12px 12px 14px rgba(0, 0, 0, 1.5)" }}
            >
              Our courses
            </Box>
          </Link>

          <Link
            activeClass="active"
            to="about-us-section"
            spy={true}
            smooth={true}
            offset={90}
            duration={500}
          >
            <Box
              as="button"
              height="24px"
              lineHeight="1.2"
              transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
              fontSize="25px"
              fontWeight="semibold"
              mr="40px"
              bg="none"
              color="#B28767"
              fontFamily="Baskerville"
              cursor="pointer"
              _hover={{ textShadow: "12px 12px 14px rgba(0, 0, 0, 1.5)" }}
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
