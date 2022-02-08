import { Box } from "@chakra-ui/react";
import * as React from "react";
import ProductCard from "./ProductCard";
import { products } from "./_data";
import { ProductGrid } from "./ProductGrid";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

export type ProductType = {
  title: string;
  desc: string;
  img: string;
  categories: Array<string>;
  price: number;
  stock: number;
};

// const getProducts = async (): Promise<ProductType[]> =>
//   await (await fetch("http://localhost:5000/api/products")).json();
// console.log(getProducts());

const getProducts = async (): Promise<ProductType[]> =>
  await (await fetch("http://localhost:5000/api/products")).json();

const CardGrid = () => {
  const { data, isLoading, error } = useQuery<ProductType[]>(
    "products",
    getProducts
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {data.map((item) => (
          <ProductCard key={item.stock} item={item} />
        ))}
      </ProductGrid>
    </Box>
  );
};

export default CardGrid;
