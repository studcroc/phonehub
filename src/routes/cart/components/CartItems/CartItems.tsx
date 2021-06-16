import { Container } from "@chakra-ui/react";
import React from "react";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  return (
    <Container
      maxWidth={["95%", "600px"]}
      bgColor="gray.100"
      padding="8px"
      border="rgba(0, 0, 0, 0.2) solid 1px"
      borderRadius="7px"
    >
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </Container>
  );
};

export default CartItems;
