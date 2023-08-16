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
                marginTop: "70px",
              }}
            />
            <Box
              position="absolute"
              textAlign="center"
              fontSize={{ base: "55px", sm: "75px", md: "100px", lg: "180px" }}
              fontWeight="bold"
              mt={{ base: "150px", sm: "200px", md: "250px", lg: "300px" }}
              color="#B28767"
              fontFamily="Baskerville"
            >
              <Text
                textShadow="12px 12px 14px rgba(0, 0, 0, 1.5)"
                color="#B28767"
                size="10px"
              >
                About us
              </Text>
            </Box>
          </Flex>

          <Box>
            <Text
              mt={{ base: "25px", md: "30px" }}
              fontSize={{ base: "13px", md: "15px" }}
              fontFamily="SourceSansRegular"
              textAlign={{ base: "center", md: "start" }}
              mr={{ base: "15px", md: "20px" }}
              ml={{ base: "15px", md: "58px" }}
              mb={{ base: "25px", md: "30px" }}
              color="#B28767"
            >
              <span>
                Binding Blooms specializes in offering exquisite floral
                experiences. Our expert florists carefully select the finest
                blooms, artfully arranging them to create captivating displays
                that are perfect for any occasion. Whether you're looking for a
                small centerpiece or an elaborate floral installation, our
                skilled team excels in transforming spaces with impeccable
                flower decorations that leave a lasting impression. <br />
              </span>
            </Text>
          </Box>

          {/* GRID */}
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 2fr", l: "1fr 2fr" }}
            maxW="100%"
            bg="linear-gradient(to right, #000E19, #192B36)"
            justifyContent="center"
          >
            <Box gridColumn={{ base: "1", md: "1", l: "1" }}>
              <Box
                display="flex"
                alignItems="start"
                justifyItems="center"
                ml={{ base: "0px", md: "58px" }}
                mr="10px"
                marginBottom={{ base: "20px", md: "40px" }}
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
                fontSize={{ base: "13px", md: "15px" }}
                fontFamily="SourceSans3 Light"
                mr={{ base: "15px", md: "20px" }}
                mt={{ base: "10px", md: "-5px" }}
                mb="40px"
                ml={{ base: "15px", md: "90px" }}
                textAlign={{ base: "center", md: "start" }}
                color="#B28767"
              >
                <span>
                  We grow many flowers from seed each year, and have large
                  collections of bulbs, corms and tubers. <br />
                  We grow shrubs and foliage to support the flowers in their
                  arrangements. We cut and condition each and every stem, and
                  ensure that every flower is cut when it is at its very best
                  for both aesthetic and longevity value. We arrange and present
                  our flowers in a natural style, often in blended colour tones.{" "}
                  <br />
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
