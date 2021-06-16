import { Box } from "@chakra-ui/layout";
import { Container, Heading, Text, Image, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartItem } from "../../../../app/types";
import { QuantityInput } from "../../../../shared/components/QuantityInput/QuantityInput";

// interface CartItemCardProps {
//   product: CartItem;
// }

const CartItemCard = () => {
  return (
    <Link to={`/details/${1}`}>
      <Container
        padding="8px"
        transition="124ms ease-in-out"
        border="rgba(0, 0, 0, 0.2) solid 1px"
        borderRadius="7px"
        cursor="pointer"
        _hover={{ boxShadow: "rgba(4, 30, 66, 0.5) 0 0 4px" }}
        display="flex"
        flexDirection="row"
        bgColor="white"
      >
        <Image
          maxWidth="100px"
          maxHeight="130px"
          marginBottom={{ sm: "4px", md: "8px" }}
          src="https://cdn.pocket-lint.com/r/s/970x/assets/images/68241-phones-review-nokia-6680-mobile-phone-image1-bKaOgE5RsJ.jpg"
          flex="1"
        />
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="0"
          paddingLeft="15px"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Heading as="h3" fontSize="large" marginBottom="24px">
              Nokia 6680 Mobile Phone
            </Heading>
            <IconButton aria-label="Remove item from cart" icon={<IoClose />} />
          </Box>
          <Box flexDirection="row" display="flex">
            Quantity: <QuantityInput id={1} />
            <Text>$420.69</Text>
          </Box>
        </Container>
      </Container>
    </Link>
  );
};

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
