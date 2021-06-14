import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { fetchProductsList } from "../../../../app/state/slices/product.slice";
import { setFilterModalOpen } from "../../../../app/state/slices/home.slice";
import Filters from "../Filters/Filters";
import { ProductCard } from "../ProductCard/ProductCard";
import "./HomeRoute.css";

type HomeRouteProps = {};

export const HomeRoute = (props: HomeRouteProps) => {
  const dispatch = useAppDispatch();

  const openFilterHandler = () => {
    dispatch(setFilterModalOpen(true));
  };

  useEffect(() => {
    dispatch(fetchProductsList());
  });

  return (
    <Container maxW="full" padding="0">
      <Button onClick={openFilterHandler}>Filters</Button>
      <Filters />
      <SimpleGrid
        columns={{ sm: 1, md: 4 }}
        spacing={10}
        padding={{ sm: "8px", md: "24px" }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SimpleGrid>
    </Container>
  );
};
