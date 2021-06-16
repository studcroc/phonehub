import {
    Box, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import React from "react";
import "./QuantityInput.css";

type QuantityInputProps = {};

export const QuantityInput = (props: QuantityInputProps) => {
  return (
    <Box display="flex">
      <NumberInput display="flex" size="md" maxW="68px" placeholder="0" min={1} max={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper>+</NumberIncrementStepper>
          <NumberDecrementStepper>-</NumberDecrementStepper>
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};
