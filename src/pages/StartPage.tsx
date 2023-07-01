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
        <Box style={{ width: "100vw", height: "100%" }}>
          <img
            src="/images/startsida1.jpg"
            alt="Background Image"
            style={{
              width: "100vw",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* GRID med bild och bildtext */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          maxW="100%"
          mt="20px"
          justifyItems="center"
          alignItems="start"
        >
          <Box gridColumn={{ base: "1", md: "1" }}>
            <Box
              display="flex"
              justifyItems="center"
              // ml="5px"
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
              fontSize="15px"
              fontFamily="SourceSansRegular"
              mr="5px"
              ml="5px"
              textAlign={{ base: "center", md: "start" }}
              color="#B28767"
            >
              <span>
                Binding Blooms, a flourishing company that came to life in 2020,
                is your ultimate destination for enchanting bouquets,
                captivating flower decorations, and exquisite flower
                arrangements. Founded by the visionary Elin Weijland, the
                company has quickly gained a reputation for its exceptional
                craftsmanship and unwavering passion for flowers. <br />
                <br />
                Elin is deeply devoted to the art of floral design. Her
                boundless passion for flowers serves as the driving force behind
                Binding Blooms' exceptional creations. With an artist's eye and
                a deep understanding of the language of flowers, Elin has
                elevated the act of binding bouquets into a symphony of colors,
                scents, and textures. Every creation by Binding Blooms is a
                masterpiece that reflects a profound connection to nature. With
                meticulous attention to detail and an innate sense of balance,
                the blooms weaves together and foliage to create harmonious
                arrangements that evoke emotions and tell stories.
                <br />
                <br />
                Binding Blooms specializes in catering to various occasions, be
                it weddings, corporate events, or intimate gatherings. Whether
                it's a lavish centerpiece, a delicate bridal bouquet, or a
                whimsical floral installation, Binding Blooms' creations leave a
                lasting impression.
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
