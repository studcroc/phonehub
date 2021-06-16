import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <Box
      margin="10px"
      maxWidth={["95%", "600px"]}
      padding="8px"
      border="rgba(0, 0, 0, 0.2) solid 1px"
      borderRadius="7px"
      flex="3"
    >
      <Heading size="md" margin="3">
        Your Cart
      </Heading>
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </Box>
  );
};

export default CartItems;
