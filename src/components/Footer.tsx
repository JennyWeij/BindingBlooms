import { Box, Grid, Text } from "@chakra-ui/react";
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
        templateColumns="1fr 1fr 1fr" // Create three equal-width columns
        gap={0} // Add a gap between columns
        maxW="800px" // Set a maximum width for the grid
        mx="auto" // Center the grid horizontally
        alignItems="center" // Center the items vertically within each cell
      >
        <Box gridColumn="1">
          <Text color="#B28767" fontSize="24px" fontWeight="bold">
            Binding Blooms
          </Text>
        </Box>
        <Box gridColumn="2">
          <GrFacebook size={24} color="#B28767" />
          <GrInstagram size={24} color="#B28767" />
          <GrTwitter size={24} color="#B28767" />
        </Box>
        <Box gridColumn="3">
          <img
            src="/images/blommor.jpg"
            alt="Flowers in wooden basket"
            style={{ width: "150px", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
