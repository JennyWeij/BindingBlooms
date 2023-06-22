import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

function CoursesPage() {
  return (
    <>
      <Element name="our-courses-section">
        <Flex
          bg="linear-gradient(to right, #000E19, #192B36)"
          justifyContent="center"
          alignItems="center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <img
            src="/images/flowertable.jpg"
            alt="Background Image"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              marginTop: "100px",
            }}
          />
          <Box
            position="absolute"
            textAlign="center"
            mt="400px"
            fontSize="100px"
            fontWeight="bold"
            fontFamily="Baskerville"
            color="white"
          >
            Our courses
          </Box>
        </Flex>

        {/* KURS 1 */}
        <Flex
          pl={100}
          pt={100}
          width="100vw"
          bg="linear-gradient(to right, #000E19, #192B36)"
        >
          <Box style={{ width: "300px", height: "400px" }}>
            <img
              src="/images/kurs1.jpg"
              alt="Course 1 Image"
              style={{ width: "300px", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Flex flexDirection="column" position="relative">
            <Text
              pr={150}
              pl={20}
              fontSize="25px"
              fontFamily="SourceSansRegular"
              color="#B28767"
              fontWeight="bold"
            >
              <h3>BOUQUETS</h3>
            </Text>
            <Text
              pr={150}
              pl={20}
              fontSize="15px"
              fontFamily="SourceSansRegular"
              color="#B28767"
            >
              <span>
                Discover the art of floral design and learn how to create
                stunning bouquets with our comprehensive course on bouquet
                binding. This hands-on learning experience is designed for
                individuals passionate about flowers and eager to acquire the
                skills needed to craft captivating floral arrangements. In our
                course, you'll be guided by experienced floral designers who
                will share their expertise and techniques for selecting the
                finest blooms, arranging them in harmonious compositions, and
                binding them into exquisite bouquets. From classic arrangements
                to modern styles, you'll explore a variety of design concepts
                and gain a deep understanding of color schemes, textures, and
                the language of flowers.
              </span>
            </Text>
            <Button
              position="absolute"
              bottom="0px"
              right="10px"
              fontSize={15}
              mr="150px"
              width="90px"
              cursor="pointer"
              bg="#B28767"
              color="#192B36"
              _hover={{ bg: "#192B36", color: "#B28767" }}
            >
              Book
            </Button>
          </Flex>
        </Flex>

        {/* KURS 2 */}
        <Flex
          pl={100}
          pt={40}
          width="100vw"
          bg="linear-gradient(to right, #000E19, #192B36)"
        >
          <Box style={{ width: "300px", height: "400px" }}>
            <img
              src="/images/kurs2.jpg"
              alt="Course 2 Image"
              style={{
                width: "300px",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Flex flexDirection="column" position="relative">
            <Text
              pr={150}
              pl={20}
              fontSize="25px"
              fontFamily="SourceSansRegular"
              color="#B28767"
              fontWeight="bold"
            >
              <h3>FLOWER DECORATIONS</h3>
            </Text>
            <Text
              pr={150}
              pl={20}
              fontSize="15px"
              fontFamily="SourceSansRegular"
              color="#B28767"
            >
              <span>
                Embark on a transformative journey into the world of flower
                decorations with our immersive course, "Flower Decorations
                Mastery." Led by renowned floral artists and industry experts,
                this comprehensive program is designed to unleash your
                creativity and equip you with the skills to craft stunning
                floral arrangements that captivate and inspire. Throughout the
                course, you'll explore various techniques and design principles,
                learning how to harmoniously blend colors, textures, and shapes
                to create breathtaking compositions. From elegant centerpieces
                to enchanting floral installations, you'll discover the secrets
                behind transforming any space into a visual masterpiece.
              </span>
            </Text>
            <Button
              position="absolute"
              bottom="0px"
              right="10px"
              fontSize={15}
              mr="150px"
              width="90px"
              bg="#B28767"
              cursor="pointer"
              color="#192B36"
              _hover={{ bg: "#192B36", color: "#B28767" }}
            >
              Book
            </Button>
          </Flex>
        </Flex>

        {/* KURS 3 */}
        <Flex
          width="100vw"
          pl={100}
          pt={40}
          bg="linear-gradient(to right, #000E19, #192B36)"
        >
          <Box style={{ width: "300px", height: "400px" }}>
            <img
              src="/images/kurs3.jpg"
              alt="Course 3 Image"
              style={{ width: "300px", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Flex flexDirection="column" position="relative">
            <Text
              pr={150}
              pl={20}
              fontSize="25px"
              fontFamily="SourceSansRegular"
              color="#B28767"
              fontWeight="bold"
            >
              <h3>FLOWER ARRANGEMENT</h3>
            </Text>
            <Text
              pr={150}
              pl={20}
              fontSize="15px"
              fontFamily="SourceSansRegular"
              color="#B28767"
            >
              <span>
                Designed for budding floral enthusiasts and aspiring designers
                alike, this course will empower you with the skills and
                knowledge to create stunning floral compositions that reflect
                your unique style and vision. From classic bouquets to modern
                sculptural designs, you'll explore a wide range of techniques
                and styles, allowing your creativity to flourish. Through
                hands-on demonstrations and practical exercises, you'll learn
                the art of selecting the perfect blooms, understanding their
                characteristics, and creating harmonious color palettes. Gain
                insights into the various forms and textures of foliage, and how
                to incorporate them to enhance your arrangements.
              </span>
            </Text>
            <Button
              position="absolute"
              bottom="0px"
              right="10px"
              fontSize={15}
              mr="150px"
              width="90px"
              cursor="pointer"
              bg="#B28767"
              color="#192B36"
              _hover={{ bg: "#192B36", color: "#B28767" }}
            >
              Book
            </Button>
          </Flex>
        </Flex>
      </Element>
    </>
  );
}

export default CoursesPage;
