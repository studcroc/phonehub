import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addToCart } from "../../../../app/state/slices/cart.slice";
import { ProductData } from "../../../../app/types";

type ProductDetailsInfoProps = {
  selectedProduct: ProductData | undefined;
};

export const ProductDetailsInfo = (props: ProductDetailsInfoProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const isProductAlreadyPresentInCart: Function = (): boolean => {
    let cartItems = cart.items;
    let isAlreadyPresentInCart = false;
    cartItems.forEach((cartItem) => {
      if (cartItem.id === props.selectedProduct?.id) {
        isAlreadyPresentInCart = true;
        return;
      }
    });
    return isAlreadyPresentInCart;
  };

  const getButtonText: Function = (): string => {
    if (isProductAlreadyPresentInCart()) {
      return "Go To Cart";
    } else {
      return "Add To Cart";
    }
  };

  const handleAddToCart: MouseEventHandler<HTMLElement> = (): void => {
    if (isProductAlreadyPresentInCart()) {
    } else {
      dispatch(addToCart(props.selectedProduct as ProductData));
    }
  };

  return (
    <Box
      flex="2"
      paddingY={["24px", "72px"]}
      paddingX="24px"
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
    >
      <Box>
        <Heading as="h1">{`${props.selectedProduct?.model}`}</Heading>
        <Heading
          as="h2"
          fontSize="x-large"
          fontWeight="light"
          marginBottom="24px"
        >{`${props.selectedProduct?.brand} `}</Heading>
        <Text
          textAlign={["justify", "start"]}
          maxW={["full", "70%"]}
        >{`${props.selectedProduct?.description}`}</Text>
      </Box>
      <Box display="flex" alignItems="center" marginTop={["24px", "auto"]}>
        <Heading
          as="h3"
          fontSize="xxx-large"
        >{`$${props.selectedProduct?.price}`}</Heading>
        <Link to={isProductAlreadyPresentInCart()? "/cart": "#"}>
          <Button
            colorScheme="blue"
            marginLeft="24px"
            onClick={handleAddToCart}
          >
            {getButtonText()}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
