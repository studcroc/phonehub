import { Container, Heading, Image, Text } from "@chakra-ui/react";
import React from 'react';
import { ProductData } from "../../../../app/types";
import './ProductCard.css';

type ProductCardProps = {
    product: ProductData,
}

export const ProductCard = (props: ProductCardProps) => {
    return (
        <Container padding="8px" transition="124ms ease-in-out" border="grey solid 1px" borderRadius="11px" cursor="pointer" _hover={{boxShadow: "rgba(0, 0, 0, 0.5) 0 4px 11px"}} maxH={["150px", "524px"]} width={["95%", "324px"]} display="flex" flexDirection={{"sm": "row", "md": "column"}}>
            <Image maxWidth={["124px", "100%"]} marginBottom={{"sm": "4px", "md": "8px"}} src={props.product.image} flex="1" />
            <Container display="flex" flexDirection="column" justifyContent="start">
                <Heading as="h3" fontSize="large">{`${props.product.brand} ${props.product.model}`}</Heading>
                <Text>${props.product.price}</Text>
            </Container>
        </Container>
    );
}