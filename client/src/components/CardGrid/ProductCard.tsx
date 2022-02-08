import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { Product } from "./_data";
import { useQuery } from "react-query";
import { ProductType } from "./CardGrid";

// interface Props {
//   product: Product;
//   rootProps?: StackProps;
// }

type Props = {
  item: ProductType;
};

const ProductCard: React.FC<Props> = ({ item }) => {
  //   const { product, rootProps } = props;
  //   const { name, imageUrl, price, salePrice, rating } = product;

  const toast = useToast();
  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })}>
      <Box position="relative">
        <AspectRatio ratio={11 / 16}>
          <Image
            src={item.img}
            alt={item.title}
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
            boxSize="200px"
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${item.title} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {item.title}
          </Text>
          <PriceTag price={item.price} currency="USD" />
        </Stack>
        {/* <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reseñas
          </Text>
        </HStack> */}
      </Stack>
      <Stack align="center">
        <Button
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"blue.300"}
          _hover={{
            bg: "blue.200",
          }}
          isFullWidth
          onClick={() =>
            toast({
              title: `Producto añadido `,
              status: "success",
              isClosable: true,
            })
          }
        >
          Añadir al carrito
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Compra rapida
        </Link>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
