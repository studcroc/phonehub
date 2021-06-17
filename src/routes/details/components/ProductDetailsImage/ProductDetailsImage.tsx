import { Box, Image, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import { ProductData } from "../../../../app/types";

type ProductDetailsImageProps = {
  selectedProduct: ProductData | undefined;
};

export const ProductDetailsImage = (props: ProductDetailsImageProps) => {
  const [srcLoaded, setSrcLoaded] = useState(false);
  return (
    <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      <Skeleton isLoaded={srcLoaded} width="100%" height={["65vh", "75vh"]}>
        <Image
          onLoad={() => {
            setSrcLoaded(true);
          }}
          alt={`${props.selectedProduct?.model}`}
          src={`${props.selectedProduct?.image}`}
          width={["100%", "auto"]}
          height={["auto", "75vh"]}
        />
      </Skeleton>
    </Box>
  );
};
