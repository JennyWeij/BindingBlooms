import { Box, Grid, Text } from "@chakra-ui/react";
import {
  GrFacebook,
  GrInstagram,
  GrPinterest,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";

function Footer() {
  return (
    <Box
      bg="linear-gradient(to right, #000E19, #192B36)"
      h="150px"
      bottom="0"
      width="100%"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={{ base: 10, md: 0 }}
        maxW="100%"
        alignItems="center"
      >
        <Box
          gridColumn={{ base: "1", md: "1" }}
          display="flex"
          justifyContent="center"
        >
          <Text color="#B28767" fontSize={{ base: "12px", md: "18px" }}>
            Binding Blooms <br />
            12 Willow Lane <br />
            London <br />
            SW1A 1AA
          </Text>
        </Box>
        <Box gridColumn={{ base: "1", md: "2" }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <GrFacebook cursor="pointer" size={23} color="#B28767" />
            <Box marginLeft={10}>
              <GrInstagram cursor="pointer" size={24} color="#B28767" />
            </Box>
            <Box marginLeft={10}>
              <GrTwitter cursor="pointer" size={24} color="#B28767" />
            </Box>
            <Box marginLeft={10}>
              <GrYoutube cursor="pointer" size={24} color="#B28767" />
            </Box>
            <Box marginLeft={10}>
              <GrPinterest cursor="pointer" size={24} color="#B28767" />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn={{ base: "1", md: "3" }}
          display="flex"
          justifyContent="center"
        >
          <Text color="#B28767" fontSize={{ base: "12px", md: "18px" }}>
            Call us
            <br />
            +44 20 1234 5678
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
