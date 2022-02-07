import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import img1 from "./Pictures/blue2.png";
import img2 from "./Pictures/yellow2.png";
import img3 from "./Pictures/red1.png";
import img4 from "./Pictures/green3.png";
import img5 from "./Pictures/darkgreen.png";
import img6 from "./Pictures/darkorange.png";
import img7 from "./Pictures/purple2.png";
import img8 from "./Pictures/blue3.png";

const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
    >
      <Container as={Stack} maxW={"6xl"} py={3}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr 2fr" }}
          spacing={2}
        >
          <Stack spacing={6}>
            <Image
              src={img1}
              alt="Blue"
              boxSize={"400px"}
              objectFit="cover"
              _hover={{ transform: "scale(1.02)" }}
              transition="all 0.40s ease"
            />
          </Stack>

          <Stack align={"flex-start"}>
            <Image
              src={img2}
              alt="Yellow"
              boxSize={"400px"}
              objectFit="cover"
            />
          </Stack>
          <Stack align={"flex-start"}>
            <Image src={img3} alt="Red" boxSize="400px" objectFit="cover" />
          </Stack>
          <Stack align={"flex-start"}>
            <Image src={img4} alt="Green" boxSize={"400px"} objectFit="cover" />
          </Stack>
          <Stack align={"flex-start"}>
            <Image
              src={img5}
              alt="DarkGreen"
              boxSize={"400px"}
              objectFit="cover"
            />
          </Stack>
          <Stack align={"flex-start"}>
            <Image
              src={img6}
              alt="DarkOrange"
              boxSize={"400px"}
              objectFit="cover"
            />
          </Stack>
          <Stack align={"flex-start"}>
            <Image src={img7} alt="Green" boxSize={"400px"} objectFit="cover" />
          </Stack>
          <Stack align={"flex-start"}>
            <Image src={img8} alt="Green" boxSize={"400px"} objectFit="cover" />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
