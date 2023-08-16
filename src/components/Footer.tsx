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
            mt="15px"
            ml="5px"
            fontSize={{ base: "13px", md: "15px" }}
          >
            <span>
              Binding Blooms <br />
              12 Willow Lane <br />
              London, SW1A 1AA
            </span>
          </Text>
        </Box>

        <Box
          gridColumn={{ base: "3", md: "3" }}
          display="flex"
          justifyContent="center"
        >
          <Text
            color="#000E19"
            mr="5px"
            fontSize={{ base: "13px", md: "15px" }}
          >
            <span>
              Contact:
              <br />
              +44 20 1234 5678
              <br />
              contact@bblooms.com
            </span>
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
