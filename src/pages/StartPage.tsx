import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

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
      {/* <Header /> */}
      <Box style={{ width: "100%", height: "100vh" }}>
        <img
          src="/images/ourcourses.jpg"
          alt="Background Image"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </Box>
      <Flex direction={["column", "column", "row"]}>
        <Box flex="1" p={20} bg="linear-gradient(to right, #000E19, #192B36)">
          <Box style={{ width: "50%", height: "500px" }}>
            <img
              src="/images/bukett5.jpg"
              alt="Background Image"
              style={{ width: "50%", height: "500px", objectFit: "cover" }}
            />
          </Box>
          <Text fontFamily="Baskerville" color="#B28767">
            Binding Blooms, a flourishing company that came to life in 2020, is
            your ultimate destination for enchanting bouquets, captivating
            flower decorations, and exquisite flower arrangements. Founded by
            the visionary Elin Weijland, the company has quickly gained a
            reputation for its exceptional craftsmanship and unwavering passion
            for flowers. Elin Weijland, a true connoisseur of nature's wonders,
            is deeply devoted to the art of floral design. Her boundless passion
            for flowers serves as the driving force behind Binding Blooms'
            exceptional creations. With an artist's eye and a deep understanding
            of the language of flowers, Elin has elevated the act of binding
            bouquets into a symphony of colors, scents, and textures. Every
            creation by Binding Blooms is a masterpiece that reflects Elin's
            profound connection to nature. With meticulous attention to detail
            and an innate sense of balance, she weaves together blooms and
            foliage to create harmonious arrangements that evoke emotions and
            tell stories. Binding Blooms specializes in catering to various
            occasions, be it weddings, corporate events, or intimate gatherings.
            Elin's ability to capture the essence of each event and translate it
            into breathtaking floral designs is truly remarkable. Whether it's a
            lavish centerpiece, a delicate bridal bouquet, or a whimsical floral
            installation, Binding Blooms' creations leave a lasting impression.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default StartPage;
