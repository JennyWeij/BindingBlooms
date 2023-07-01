import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

function AboutPage() {
  return (
    <>
      <Box bg="linear-gradient(to right, #000E19, #192B36)">
        <Element name="about-us-section">
          <Flex
            bg="linear-gradient(to right, #000E19, #192B36)"
            justifyContent="center"
            alignItems="center"
            style={{ width: "100vw", height: "100%" }}
          >
            <img
              src="/images/aboutus.jpg"
              alt="Flowers on table image"
              style={{
                width: "100vw",
                height: "100%",
                objectFit: "cover",
                marginTop: "50px",
              }}
            />
            <Box
              position="absolute"
              textAlign="end"
              fontSize={{ base: "65px", md: "100px", lg: "200px" }}
              fontWeight="bold"
              mt={{ base: "180px", md: "300px", lg: "400px" }}
              color="#B28767"
              fontFamily="Baskerville"
            >
              About us
            </Box>
          </Flex>

          {/* GRID */}
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 2fr", l: "1fr 2fr" }}
            maxW="100%"
            bg="linear-gradient(to right, #000E19, #192B36)"
            justifyContent="center"
            mt="50px"
          >
            <Box gridColumn={{ base: "1", md: "1", l: "1" }}>
              <Box
                display="flex"
                alignItems="center"
                justifyItems="center"
                // ml="10px"
                mr="10px"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src="/images/store.jpg"
                  alt="Background Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>

            {/* GRID kolumn 2 */}
            <Box gridColumn={{ base: "1", md: "2" }}>
              <Text
                fontSize="15px"
                fontFamily="SourceSans3 Light"
                mr="10px"
                ml="30px"
                textAlign={{ base: "center", md: "start" }}
                color="#B28767"
              >
                <span>
                  We grow many flowers from seed each year, and have large
                  collections of bulbs, corms and tubers. We grow shrubs and
                  foliage to support the flowers in their arrangements. We cut
                  and condition each and every stem, and ensure that every
                  flower is cut when it is at its very best for both aesthetic
                  and longevity value. We arrange and present our flowers in a
                  natural style, often in blended colour tones. <br />
                  <br />
                  All arrangements are unique, no two arrangements will ever be
                  the same. We wrap our flowers in brown Kraft paper and raffia
                  twine, all of which can be composted, reused or recycled. We
                  also present our flowers in jam jars of water to ensure they
                  remain hydrated and reach you in perfect condition. <br />
                  <br />
                  Please see our Shop for our products. Your flowers will come
                  with a Care Card, please do try to follow these steps to
                  maintain the life and beauty of your flowers for as long as
                  possible.
                </span>
              </Text>
            </Box>
          </Grid>
        </Element>
      </Box>
    </>
  );
}

export default AboutPage;
