import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ProductData } from '../../../../app/types';

type ProductDetailsImageProps = {
    selectedProduct: ProductData | undefined,
}

export const ProductDetailsImage = (props: ProductDetailsImageProps) => {
    return (
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          alt={`${props.selectedProduct?.model}`}
          src={`${props.selectedProduct?.image}`}
          width="100%"
        />
      </Box>
    );
}