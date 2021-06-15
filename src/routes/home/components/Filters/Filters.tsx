import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Heading as h3, VStack } from "@chakra-ui/layout";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setFilterModalOpen } from "../../../../app/state/slices/home.slice";

const BrandFilters: FC = () => {
  let brandOptions: any = [];
  const productsList = useAppSelector((state) => state.product.productsList);
  if (Array.isArray(productsList)) {
    const brands = productsList.map((item) => item.brand);
    const uniqueBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    brandOptions = uniqueBrands.map((item) => (
      <Checkbox key={item} margin="5px">
        {item}
      </Checkbox>
    ));
  }
  return (
    <Box width="100%">
      <h3 style={{ fontWeight: "bold" }}>Select Brands</h3>
      {brandOptions}
    </Box>
  );
};

const PriceFilters: FC = () => {
  let priceOptions: any = [];
  const productsList = useAppSelector((state) => state.product.productsList);
  if (Array.isArray(productsList)) {
    const prices = productsList.map((item) => item.price);
    const max = Math.max(...prices);
    const min = Math.min(...prices);

    for (var i = min; i <= max; i += 100) {
      priceOptions.push(
        <Checkbox key={i} margin="5px">
          {i}-{i + 100}
        </Checkbox>
      );
    }
  }

  return (
    <Box width="100%">
      <h3 style={{ fontWeight: "bold" }}>Select Price</h3>
      {priceOptions}
    </Box>
  );
};

const Filters: FC = () => {
  const openValue = useAppSelector((state) => state.home.filterModalOpen);

  const dispatch = useAppDispatch();

  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: false,
    isOpen: openValue,
    onClose: () => {
      dispatch(setFilterModalOpen(false));
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filters</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <BrandFilters />
            <PriceFilters />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button>Set Filters</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Filters;
