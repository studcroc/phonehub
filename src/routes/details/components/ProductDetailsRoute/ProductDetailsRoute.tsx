import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addToCart } from "../../../../app/state/slices/cart.slice";
import { ProductData } from "../../../../app/types";
import "./ProductDetailsRoute.css";

type ProductDetailsRouteProps = {};

export const ProductDetailsRoute = (props: ProductDetailsRouteProps) => {
  let { id }: any = useParams();
  const productList = useAppSelector((state) => state.product.productsList);
  const selectedProduct = productList.find(
    (value) => value.id.toString() === id
  );

  const dispatch = useAppDispatch();

  return (
    <Box
      marginTop={["56px", "106px"]}
      paddingX={["auto", "24px"]}
      display="flex"
      flexDirection={["column", "row"]}
    >
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          alt={`${selectedProduct?.model}`}
          src={`${selectedProduct?.image}`}
          width="100%"
        />
      </Box>
      <Box
        flex="2"
        paddingY={["24px", "72px"]}
        paddingX="24px"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <Box>
          <Heading as="h1">{`${selectedProduct?.model}`}</Heading>
          <Heading
            as="h2"
            fontSize="x-large"
            fontWeight="light"
            marginBottom="24px"
          >{`${selectedProduct?.brand} `}</Heading>
          <Text
            textAlign={["justify", "start"]}
            maxW={["full", "70%"]}
          >{`${selectedProduct?.description}`}</Text>
        </Box>
        <Box display="flex" alignItems="center" marginTop={["24px", "auto"]}>
          <Heading
            as="h3"
            fontSize="xxx-large"
          >{`$${selectedProduct?.price}`}</Heading>
          <Button
            colorScheme="blue"
            marginLeft="24px"
            onClick={() => dispatch(addToCart(selectedProduct as ProductData))}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
