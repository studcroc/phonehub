import { VStack } from "@chakra-ui/layout";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setFilterModalOpen } from "../../../../app/state/slices/home.slice";
import {
  clearFilters,
  setFilters
} from "../../../../app/state/slices/product.slice";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";

const Filters: FC = () => {
  const productsList = useAppSelector((state) => state.product.productsList);
  const openValue = useAppSelector((state) => state.home.filterModalOpen);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const prices = productsList.map((item) => item.price);
    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));
  }, [productsList]);

  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: false,
    isOpen: openValue,
    onClose: () => {
      dispatch(setFilterModalOpen(false));
    },
  });

  const [brands, selectBrands] = useState<Array<string>>([]);
  const brandCheckboxHandler = (
    e: ChangeEvent<HTMLInputElement>,
    brand: string
  ) => {
    if (e.target.checked === true) {
      selectBrands([...brands, brand]);
    } else {
      selectBrands(brands.filter((b) => b !== brand));
    }
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const minPriceChangeHandler = (vStr: string, vNum: number) => {
    setMinPrice(vNum);
  };
  const maxPriceChangeHandler = (vStr: string, vNum: number) => {
    setMaxPrice(vNum);
  };

  const setFilterHandler = () => {
    const min = minPrice;
    const max = maxPrice;
    console.log("SetFilters", min, max);
    dispatch(setFilters({ brands: brands, min: min, max: max }));
    onClose();
  };

  const clearFilterHandler = () => {
    console.log("Clear filters");
    selectBrands([]);
    setMinPrice(0);
    dispatch(clearFilters());
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filters</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <BrandFilter
              selectedBrands={brands}
              checkboxHandler={brandCheckboxHandler}
            />
            <PriceFilter
              onMinChange={minPriceChangeHandler}
              min={minPrice}
              onMaxChange={maxPriceChangeHandler}
              max={maxPrice}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={clearFilterHandler} marginRight="3px">
            Clear All Filters
          </Button>
          <Button onClick={setFilterHandler}>Set Filters</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Filters;
