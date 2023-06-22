import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Box
        bg="linear-gradient(to right, #000E19, #192B36)"
        h="300px"
        bottom="0"
        pt="50px"
      >
        <Box style={{ width: "400px", height: "250px" }}>
          <img
            src="/images/blommor.jpg"
            alt="Flowers in wooden basket"
            style={{ width: "400px", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Footer;
