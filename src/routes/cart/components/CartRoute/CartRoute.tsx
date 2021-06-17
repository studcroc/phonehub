import { Container } from "@chakra-ui/react";
import CartItems from "../CartItems/CartItems";
import CartSummary from "../CartSummary/CartSummary";
import "./CartRoute.css";

export const CartRoute = () => {
  return (
    <Container
      maxW={["full", "1200px"]}
      padding="0"
      marginTop="70px"
      display="flex"
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="center"
      flexWrap="wrap-reverse"
    >
      <CartItems />
      <CartSummary />
    </Container>
  );
};
