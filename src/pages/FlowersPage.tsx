import { Box, Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

function FlowersPage() {
  return (
    <>
      <Element name="our-flowers-section">
        <Flex
          bg="linear-gradient(to right, #000E19, #192B36)"
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src="/images/flowerfield.jpg"
            alt="Background Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginTop: "100px",
            }}
          />
          <Box
            position="absolute"
            textAlign="center"
            fontSize="100px"
            color="#B28767"
            fontWeight="bold"
            fontFamily="Baskerville"
          >
            Our flowers
          </Box>
        </Flex>

        <Flex
          pl={90}
          pt={100}
          width="100vw"
          bg="linear-gradient(to right, #000E19, #192B36)"
        >
          <Box style={{ width: "400px", height: "500px" }}>
            <img
              src="/images/fieldsunset.jpg"
              alt="Background Image"
              style={{ width: "400px", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box p={2} flex="1">
            <Text
              pr={150}
              pl={20}
              fontSize="15px"
              fontFamily="SourceSansRegular"
              color="#B28767"
            >
              <span>
                At our binding bouquets company, we take pride in the
                exceptional quality of our flowers. We meticulously grow and
                nurture them in our very own flower fields, located in
                picturesque countryside regions. Our flower fields are carefully
                chosen to provide the optimal conditions for each flower variety
                to thrive. We cultivate a diverse range of certified flowers,
                ensuring that each bloom meets our stringent standards of
                excellence. <br />
                <br />
                From the moment our seeds are sown, our dedicated team of
                horticulturists and gardeners attentively tend to the flowers,
                providing them with the ideal environment to grow and flourish.
                We prioritize sustainable and eco-friendly farming practices,
                using organic fertilizers and natural pest control methods to
                minimize any impact on the environment. Harvesting is a
                meticulous process that requires a keen eye for each flower's
                peak perfection. <br />
                <br />
                Our experienced floral experts carefully handpick each stem at
                the precise moment when its colors are vibrant and its petals
                are in full bloom. This ensures that our customers receive only
                the freshest and most stunning flowers. Once harvested, our
                flowers are quickly transported to our company's facilities,
                where they undergo a rigorous quality control process. Our
                expert florists meticulously inspect each stem, ensuring that
                only the finest and healthiest flowers make it into our
                bouquets. To preserve their freshness, our flowers are stored in
                climate-controlled environments.
                <br />
                <br />
                We employ innovative techniques, such as cold chain management,
                to maintain optimal temperature and humidity levels during
                transportation, ensuring that our bouquets arrive at their
                destination in perfect condition. By nurturing our flowers from
                seed to bouquet, we guarantee the utmost care and attention to
                detail in every step of the process.
                <br />
                <br />
                Our certified flowers embody the beauty of nature and serve as a
                testament to our commitment to delivering exceptional floral
                arrangements that exceed expectations.
              </span>
            </Text>
          </Box>
        </Flex>
      </Element>
    </>
  );
}

export default FlowersPage;
