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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setFilterModalOpen } from "../../../../app/state/slices/home.slice";
import {
  clearFilters,
  setFilters,
} from "../../../../app/state/slices/product.slice";

interface brandFilterProps {
  checkboxHandler: (e: ChangeEvent<HTMLInputElement>, brand: string) => void;
}

interface priceFilterProps {
  onMinChange: (valueAsString: string, valueAsNumber: number) => void;
  onMaxChange: (valueAsString: string, valueAsNumber: number) => void;
  min: number;
  max: number;
}

const BrandFilter: FC<brandFilterProps> = (props) => {
  let brandOptions: any = [];
  const productsList = useAppSelector((state) => state.product.productsList);

  if (Array.isArray(productsList)) {
    const brands = productsList.map((item) => item.brand);
    const uniqueBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    brandOptions = uniqueBrands.map((brand) => (
      <Checkbox
        onChange={(e) => props.checkboxHandler(e, brand)}
        key={brand}
        margin="5px"
      >
        {brand}
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

const PriceFilter: FC<priceFilterProps> = (props) => {
  // let priceOptions: any = [];
  const productsList = useAppSelector((state) => state.product.productsList);
  if (!Array.isArray(productsList)) {
    return <div></div>;
  }
  const prices = productsList.map((item) => item.price);
  const max = Math.max(...prices);
  const min = Math.min(...prices);

  return (
    <Box width="100%">
      <h3 style={{ fontWeight: "bold" }}>Set Price Range</h3>
      <h4>Minimum:</h4>
      <NumberInput
        defaultValue={min}
        min={0}
        max={max}
        step={50}
        clampValueOnBlur={true}
        onChange={props.onMinChange}
        value={props.min}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <h4>Maximum:</h4>
      <NumberInput
        defaultValue={max}
        min={0}
        max={max}
        step={50}
        clampValueOnBlur={true}
        onChange={props.onMaxChange}
        value={props.max}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
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

  const selectedBrands: Array<string> = [];
  const brandCheckboxHandler = (
    e: ChangeEvent<HTMLInputElement>,
    brand: string
  ) => {
    if (e.target.checked === true) {
      selectedBrands.push(brand);
    } else {
      selectedBrands.splice(selectedBrands.indexOf(brand), 1);
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
    dispatch(setFilters({ brands: selectedBrands, min: min, max: max }));
    onClose();
  };

  const clearFilterHandler = () => {
    console.log("Clear filters");
    dispatch(clearFilters);
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
            <BrandFilter checkboxHandler={brandCheckboxHandler} />
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
