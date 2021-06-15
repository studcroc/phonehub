import {
    Box,
    Button,
    Container,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { useAppDispatch } from "../../../../app/hooks";
import { setFilterModalOpen } from "../../../../app/state/slices/home.slice";
import { sortProducts } from "../../../../app/state/slices/product.slice";
import "./ToolBar.css";

type ToolBarProps = {};

export const ToolBar = (props: ToolBarProps) => {
  const [sortOption, setSortOption] = useState("Select an option");

  const dispatch = useAppDispatch();
  const openFilterHandler = () => {
    dispatch(setFilterModalOpen(true));
  };

  return (
    <Container
      display="flex"
      backgroundColor="pink"
      maxWidth="100%"
      alignItems="center"
      paddingY="4px"
      paddingX={["4px", "24px"]}
      justifyContent="space-between"
      marginBottom={["8px", "0"]}
    >
      <Box display="flex" alignItems="center">
        <Text fontWeight="bold" marginRight="8px">
          Sort By:{" "}
        </Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
            {sortOption}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => { setSortOption("Select an option"); dispatch(sortProducts("Select an option")); }}>
              Select an option
            </MenuItem>
            <MenuItem onClick={() => { setSortOption("Price (Low to High)"); dispatch(sortProducts("Price (Low to High)")); }}>
              Price (Low to High)
            </MenuItem>
            <MenuItem onClick={() => { setSortOption("Price (High to Low)"); dispatch(sortProducts("Price (High to Low)")); }}>
              Price (High to Low)
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Icon
        as={IoFilterSharp}
        fontSize="xx-large"
        onClick={openFilterHandler}
        cursor="pointer"
      />
    </Container>
  );
};
