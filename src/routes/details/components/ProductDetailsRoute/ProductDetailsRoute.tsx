import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { ProductDetailsImage } from "../ProductDetailsImage/ProductDetailsImage";
import { ProductDetailsInfo } from "../ProductDetailsInfo/ProductDetailsInfo";

type ProductDetailsRouteProps = {};

export const ProductDetailsRoute = (props: ProductDetailsRouteProps) => {
  let { id }: any = useParams();
  const productList = useAppSelector((state) => state.product.productsList);
  const selectedProduct = productList.find(
    (value) => value.id.toString() === id
  );

  return (
    <Box
      marginTop={["56px", "106px"]}
      paddingX={["auto", "24px"]}
      display="flex"
      flexDirection={["column", "row"]}
    >
      <ProductDetailsImage selectedProduct={selectedProduct} />
      <ProductDetailsInfo selectedProduct={selectedProduct} />
    </Box>
  );
};
