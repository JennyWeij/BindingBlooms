import { Box, Grid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import HeaderBurgerMenu from "../components/HeaderBurgerMenu";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import FlowersPage from "./FlowersPage";

function StartPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right, #000E19, #192B36)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      {/* Header och Herobild */}
      <HeaderBurgerMenu />
      <Box bg="linear-gradient(to right, #000E19, #192B36)">
        <Box
          style={{
            width: "100vw",
            height: "100%",
            marginTop: "50px",
            position: "relative", // Set the position to relative
          }}
        >
          <img
            src="/images/startsida.jpg"
            alt="Background Image"
            style={{
              width: "100vw",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* <Box
            position="absolute"
            top="10%" // Use relative units for position
            left="75%" // Use relative units for position
            transform="translate(50%, 25%)"
            display="flex"
            alignItems="center"
            justifyContent="start"
            width={["15%", "15%", "15%"]} // Use relative units for width
            height={["20%", "20%", "20%"]} // Use relative units for height
            backgroundColor="#B28767"
            borderRadius="50%"
            zIndex={20}
          >
            <Text
              fontFamily="SourceSansRegular"
              color="#000E19"
              ml={{ base: "4px", md: "10px" }}
              fontSize={["8px", "11px", "18px"]}
              width="fit-content" // Set the width to fit the content
              max-width="80%" // Set a maximum width to prevent overflowing text
            >
              New course dates coming!
            </Text>
          </Box> */}
        </Box>

        <Box>
          <Text
            fontSize={{ base: "13px", md: "15px" }}
            fontFamily="SourceSansRegular"
            mr={{ base: "15px", md: "20px" }}
            ml={{ base: "15px", md: "40px" }}
            mt={{ base: "15px", md: "30px" }}
            mb={{ base: "15px", md: "20px" }}
            textAlign={{ base: "center", md: "start" }}
            color="#B28767"
          >
            <span>
              Flowers have long been a symbol of beauty and joy, captivating
              hearts with their vibrant colors and delicate petals. For
              centuries, people have sought ways to cultivate and preserve the
              natural beauty of flowers, cherishing their presence in various
              celebrations and occasions. At the forefront of the floral
              industry, our company stands committed to delivering unparalleled
              beauty and uncompromising quality. Our passion for flowers runs
              deep, inspiring us to create a truly immersive experience that
              showcases the wonders of nature.
            </span>
          </Text>
        </Box>

        {/* GRID med bild och bildtext */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          maxW="100%"
          justifyItems="center"
          alignItems="start"
        >
          <Box gridColumn={{ base: "1", md: "1" }}>
            <Box
              display="flex"
              justifyItems="center"
              ml={{ base: "0px", md: "40px" }}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src="/images/aboutus.png"
                alt="Background Image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          {/* GRID kolumn 2 */}
          <Box gridColumn={{ base: "1", md: "2" }}>
            <Text
              fontSize={{ base: "13px", md: "15px" }}
              fontFamily="SourceSansRegular"
              mr={{ base: "15px", md: "20px" }}
              ml={{ base: "15px", md: "62px" }}
              mt={{ base: "15px", md: "-5px" }}
              textAlign={{ base: "center", md: "start" }}
              color="#B28767"
            >
              <span>
                Binding Blooms, a flourishing company that came to life in 2020,
                is your ultimate destination for enchanting bouquets,
                captivating flower decorations, and exquisite flower
                arrangements. <br />
                Founded by the visionary Elin Weijland, the company has quickly
                gained a reputation for its exceptional craftsmanship and
                unwavering passion for flowers. <br />
                <br />
                Elin is deeply devoted to the art of floral design. Her
                boundless passion for flowers serves as the driving force behind
                Binding Blooms' exceptional creations. With an artist's eye and
                a deep understanding of the language of flowers, Elin has
                elevated the act of binding bouquets into a symphony of colors,
                scents, and textures. Every creation by Binding Blooms is a
                masterpiece that reflects a profound connection to nature. With
                meticulous attention to detail and an innate sense of balance,
                <br />
                the blooms weaves together and foliage to create harmonious
                arrangements that evoke emotions and tell stories.
                <br />
              </span>
            </Text>
          </Box>
        </Grid>

        <FlowersPage />
        <CoursesPage />
        <AboutPage />
      </Box>
    </>
  );
}

export default StartPage;
