import {
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface priceFilterProps {
  onMinChange: (valueAsString: string, valueAsNumber: number) => void;
  onMaxChange: (valueAsString: string, valueAsNumber: number) => void;
  min: number;
  max: number;
}
const PriceFilter: FC<priceFilterProps> = (props) => {
  return (
    <Box width="100%">
      <h3 style={{ fontWeight: "bold" }}>Set Price Range</h3>
      <h4>Minimum:</h4>
      <NumberInput
        min={0}
        max={props.max}
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
        min={0}
        max={props.max}
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

export default PriceFilter;
