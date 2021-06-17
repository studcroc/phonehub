import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchProductsList } from "../../../../app/state/slices/product.slice";
import { ProductData } from "../../../../app/types";
import Filters from "../Filters/Filters";
import { ProductCard } from "../ProductCard/ProductCard";

type HomeRouteProps = {};

export const HomeRoute = (props: HomeRouteProps) => {
  const dispatch = useAppDispatch();

  const displayedProducts: Array<ProductData> = useAppSelector((state => state.product.displayed));

  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);

  return (
    <Container maxW="full" padding="0" marginTop={["124px", "100px" ]}>
      <Filters />
      <SimpleGrid
        columns={{ sm: 1, md: 4 }}
        spacing={10}
        padding={{ sm: "8px", md: "24px" }}
      >
        {displayedProducts.map((product, index) => {
          return <ProductCard product={product} key={product.id} />
        })}
      </SimpleGrid>
    </Container>
  );
};
