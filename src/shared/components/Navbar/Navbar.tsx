import { Box, Container, Icon } from "@chakra-ui/react";
import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { IoCartOutline, IoFilterSharp } from "react-icons/io5";
import { useAppDispatch } from "../../../app/hooks";
import { setFilterModalOpen } from "../../../app/state/slices/home.slice";
import "./Navbar.css";

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {

    const dispatch = useAppDispatch();
    const openFilterHandler = () => {
        dispatch(setFilterModalOpen(true));
      };
      
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
      <Box>
        <Icon as={IoFilterSharp} fontSize="xx-large" marginRight="24px" onClick={openFilterHandler} cursor="pointer" />
        <Icon as={IoCartOutline} fontSize="xx-large" cursor="pointer" />
      </Box>
    </Container>
  );
};
