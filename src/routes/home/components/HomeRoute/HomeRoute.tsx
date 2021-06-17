import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import Filters from "../Filters/Filters";
import { ProductCard } from "../ProductCard/ProductCard";

export const HomeRoute = () => {
  const displayedProducts = useAppSelector((state) => state.product.displayed);

  return (
    <Container maxW="full" padding="0" marginTop={["124px", "100px"]}>
      <Filters />
      <SimpleGrid
        columns={{ sm: 1, md: 4 }}
        spacing={10}
        padding={{ sm: "8px", md: "24px" }}
      >
        {displayedProducts.map((product, index) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </SimpleGrid>
    </Container>
  );
};
