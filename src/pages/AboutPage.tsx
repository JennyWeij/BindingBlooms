import { Box, Flex, Text } from "@chakra-ui/react";

function AboutPage() {
  return (
    <>
      <Flex
        bg="linear-gradient(to right, #000E19, #192B36)"
        justifyContent="center"
        alignItems="center"
        style={{ width: "100%", height: "100vh" }}
      >
        <img
          src="/images/flowerpicture.jpg"
          alt="Background Image"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "inherit",
            marginTop: "100px",
            marginBottom: "120px",
          }}
        />
        <Box
          position="absolute"
          textAlign="center"
          // mt="250px"
          fontSize="100px"
          fontWeight="bold"
          fontFamily="Baskerville"
          color="white"
        >
          About us
        </Box>
      </Flex>

      <Flex pl={90} pt={60} bg="linear-gradient(to right, #000E19, #192B36)">
        <Box style={{ width: "800px", height: "500px" }}>
          <img
            src="/images/store.jpg"
            alt="Background Image"
            style={{ width: "800px", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box p={2} flex="1">
          <Text
            pr={150}
            pl={20}
            fontSize="18px"
            fontFamily="SourceSansRegular"
            color="#B28767"
          >
            We grow many flowers from seed each year, and have large collections
            of bulbs, corms and tubers. We grow shrubs and foliage to support
            the flowers in their arrangements. We cut and condition each and
            every stem, and ensure that every flower is cut when it is at its
            very best for both aesthetic and longevity value. We arrange and
            present our flowers in a natural style, often in blended colour
            tones. All arrangements are unique, no two arrangements will ever be
            the same. We wrap our flowers in brown Kraft paper and raffia twine,
            all of which can be composted, reused or recycled. We also present
            our flowers in jam jars of water to ensure they remain hydrated and
            reach you in perfect condition. Please see our Shop for our
            products. Your flowers will come with a Care Card, please do try to
            follow these steps to maintain the life and beauty of your flowers
            for as long as possible.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default AboutPage;
