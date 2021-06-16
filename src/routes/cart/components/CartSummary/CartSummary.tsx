import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../../app/hooks";

const CartSummary = () => {
  const cartTotal = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.price * item.qty, 0)
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      maxWidth={["95%", "400px"]}
      padding="10px"
      border="rgba(0, 0, 0, 0.2) solid 1px"
      borderRadius="7px"
      margin="10px"
      flex="1"
    >
      <Heading size="md" marginBottom="5">
        Cart Summary
      </Heading>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Heading size="sm">Total</Heading>
        <Text>$ {cartTotal}</Text>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Heading size="sm">Address</Heading>
        <Box display="flex" flexDirection="column">
          <Text>Line 1</Text>
          <Text>Line 2</Text>
          <Text>Line 3</Text>
        </Box>
      </Box>
      <Button width="98%" colorScheme="blue" marginTop="5">
        Proceed To Checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
