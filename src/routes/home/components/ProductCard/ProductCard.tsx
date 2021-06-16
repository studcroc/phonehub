import { Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../../../../app/types";
import "./ProductCard.css";

type ProductCardProps = {
  product: ProductData;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Link to={`/details/${props.product.id}`}>
      <Container
        padding="8px"
        transition="124ms ease-in-out"
        border="rgba(0, 0, 0, 0.2) solid 1px"
        borderRadius="7px"
        cursor="pointer"
        _hover={{ boxShadow: "rgba(4, 30, 66, 0.5) 0 0 4px" }}
        maxH={["150px", "524px"]}
        width={["95%", "324px"]}
        display="flex"
        flexDirection={{ sm: "row", md: "column" }}
      >
        <Image
          maxWidth={["124px", "100%"]}
          marginBottom={{ sm: "4px", md: "8px" }}
          src={props.product.image}
          flex="1"
        />
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="0"
          paddingLeft="8px"
        >
          <Heading
            as="h3"
            fontSize="large"
            marginBottom="24px"
          >{`${props.product.brand} ${props.product.model}`}</Heading>
          <Text>${props.product.price}</Text>
        </Container>
      </Container>
    </Link>
  );
};
