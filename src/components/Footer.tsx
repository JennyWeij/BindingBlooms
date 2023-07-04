import { Box, Grid, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="#B28767" h="100px" width="100%">
      <Grid
        templateColumns={{ base: "1fr 1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={{ base: 4, md: 10 }}
        maxW="100%"
        alignItems="baseline"
      >
        <Box
          gridColumn={{ base: "1", md: "1" }}
          display="flex"
          justifyContent="center"
        >
          <Text
            color="#000E19"
            mt="10px"
            mb="10px"
            ml="5px"
            fontSize={{ base: "12px", md: "17px" }}
          >
            Binding Blooms <br />
            12 Willow Lane <br />
            London, SW1A 1AA
          </Text>
        </Box>
        {/* <Box gridColumn={{ base: "2", md: "2" }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <GrFacebook cursor="pointer" size={23} color="#000E19" />
            <Box marginLeft={{ base: 5, md: 10 }}>
              <GrInstagram cursor="pointer" size={24} color="#000E19" />
            </Box>
            <Box marginLeft={{ base: 5, md: 10 }}>
              <GrTwitter cursor="pointer" size={24} color="#000E19" />
            </Box>
            <Box marginLeft={{ base: 5, md: 10 }}>
              <GrYoutube cursor="pointer" size={24} color="#000E19" />
            </Box>
            <Box marginLeft={{ base: 5, md: 10 }}>
              <GrPinterest cursor="pointer" size={24} color="#000E19" />
            </Box>
          </Box>
        </Box> */}
        <Box
          gridColumn={{ base: "3", md: "3" }}
          display="flex"
          justifyContent="center"
        >
          <Text
            color="#000E19"
            mr="5px"
            fontSize={{ base: "12px", md: "17px" }}
          >
            Contact:
            <br />
            +44 20 1234 5678
            <br />
            contact@bblooms.com
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
