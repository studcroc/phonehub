import { Box, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { removeFromCart } from "../../../../app/state/slices/cart.slice";
import { CartItem } from "../../../../app/types";
import { QuantityInput } from "../../../../shared/components/QuantityInput/QuantityInput";

const CartItemCard = (props: CartItem) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      padding="8px"
      transition="124ms ease-in-out"
      border="rgba(0, 0, 0, 0.2) solid 1px"
      borderRadius="7px"
      _hover={{ boxShadow: "rgba(4, 30, 66, 0.5) 0 0 4px" }}
      display="flex"
      flexDirection="row"
      margin="5px 0"
    >
      <Link to={`/details/${props.id}`}>
        <Image
          maxWidth="120px"
          maxHeight="120px"
          marginBottom={{ sm: "4px", md: "8px" }}
          src={props.image}
        />
      </Link>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        padding="0"
        paddingLeft="15px"
        flex="1"
      >
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Link to={`/details/${props.id}`}>
            <Heading as="h3" size="md" marginBottom="24px">
              {`${props.brand} ${props.model}`}
            </Heading>
          </Link>
          <IconButton
            aria-label="Remove item from cart"
            icon={<IoClose />}
            onClick={() => dispatch(removeFromCart(props.id))}
          />
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
            <QuantityInput id={props.id} />
          </Box>
          <Box display="flex" flexDirection="row" margin="2">
            <Heading size="sm" marginRight="5">
              Price
            </Heading>
            <Text>${props.price}</Text>
          </Box>
          <Box display="flex" flexDirection="row" margin="2">
            <Heading size="sm" marginRight="5">
              Total
            </Heading>
            <Text>${props.price * props.qty}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItemCard;
