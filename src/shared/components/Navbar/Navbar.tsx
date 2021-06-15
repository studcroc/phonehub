import { Box, Container, Icon } from "@chakra-ui/react";
import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css";

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
      
  return (
    <Container
      zIndex="1"
      position="fixed"
      left="0"
      right="0"
      top="0"
      backgroundColor="grey"
      height="50px"
      maxWidth="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Icon as={BiHomeSmile} fontSize="xx-large" cursor="pointer" />
      <Box position="relative">
        <Box position="absolute" right="-4px" top="-4px" backgroundColor="green" borderRadius="50%" height="18px" width="18px" display="flex" alignItems="center" justifyContent="center" color="white" padding="10px">1</Box>
        <Icon as={IoCartOutline} fontSize="xx-large" cursor="pointer" />
      </Box>
    </Container>
  );
};
