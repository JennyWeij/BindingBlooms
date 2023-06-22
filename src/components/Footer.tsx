import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

function Footer() {
  return (
    <Box
      bg="linear-gradient(to right, #000E19, #192B36)"
      h="300px"
      bottom="0"
      pt="50px"
      width="100vw"
    >
      <Grid
        templateColumns="1fr 1fr 1fr"
        gap={0}
        maxW="1000px"
        mx="auto"
        alignItems="center"
      >
        <Box gridColumn="1">
          <Text color="#B28767" fontSize="24px" fontWeight="bold">
            Binding Blooms
          </Text>
        </Box>
        <Box gridColumn="2">
          <Box display="flex" alignItems="center">
            <GrFacebook size={23} color="#B28767" />
            <Box marginLeft={20}>
              <GrInstagram size={24} color="#B28767" />
            </Box>
            <Box marginLeft={20}>
              <GrTwitter size={24} color="#B28767" />
            </Box>
          </Box>
        </Box>
        <Box gridColumn="3" alignItems="self-end">
          <img
            src="/images/blommor.jpg"
            alt="Flowers in wooden basket"
            style={{ width: "150px", height: "100%", objectFit: "contain" }}
          />
          <Image
            src="/images/Logotype.png"
            alt="Logo"
            height="70px"
            mt={0}
            ml={50}
          />
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
