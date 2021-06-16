import { Box, Heading, IconButton, Image, Text } from "@chakra-ui/react";
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
      <Box
        padding="8px"
        transition="124ms ease-in-out"
        border="rgba(0, 0, 0, 0.2) solid 1px"
        borderRadius="7px"
        cursor="pointer"
        _hover={{ boxShadow: "rgba(4, 30, 66, 0.5) 0 0 4px" }}
        display="flex"
        flexDirection="row"
        margin="5px 0"
      >
        <Image
          maxWidth="120px"
          maxHeight="120px"
          marginBottom={{ sm: "4px", md: "8px" }}
          src="https://cdn.pocket-lint.com/r/s/970x/assets/images/68241-phones-review-nokia-6680-mobile-phone-image1-bKaOgE5RsJ.jpg"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="0"
          paddingLeft="15px"
          flex="1"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Heading as="h3" size="md" marginBottom="24px">
              Nokia 6680 Mobile Phone
            </Heading>
            <IconButton aria-label="Remove item from cart" icon={<IoClose />} />
          </Box>
          <Box
            flexDirection="row"
            display="flex"
            justifyContent="flex-end"
            flexWrap="wrap"
          >
            <Box display="flex" flexDirection="row" margin="1">
              <Heading size="sm" marginRight="2" alignSelf="center">
                Quantity
              </Heading>
              <QuantityInput id={1} />
            </Box>
            <Box display="flex" flexDirection="row" margin="2">
              <Heading size="sm" marginRight="5">
                Price
              </Heading>
              <Text>$69.99</Text>
            </Box>
            <Box display="flex" flexDirection="row" margin="2">
              <Heading size="sm" marginRight="5">
                Total
              </Heading>
              <Text>$420.69</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default CartItemCard;
