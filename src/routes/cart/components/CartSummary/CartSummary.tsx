import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CartSummary = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      maxWidth={["95%", "400px"]}
      bgColor="gray.100"
      padding="10px"
      border="rgba(0, 0, 0, 0.2) solid 1px"
      borderRadius="7px"
      maxHeight="300px"
    >
      <Heading size="md" marginBottom="5">
        Cart Summary
      </Heading>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Heading size="sm">Total</Heading>
        <Text>$ 420.69</Text>
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
