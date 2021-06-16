import {
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../app/state/slices/cart.slice";
import "./QuantityInput.css";

type QuantityInputProps = {
  id: number;
};

export const QuantityInput = (props: QuantityInputProps) => {
  const qty = useAppSelector((state) => {
    for (let i = 0; i < state.cart.items.length; ++i) {
      if (state.cart.items[i].id === props.id) return state.cart.items[i].qty;
    }
  });

  const dispatch = useAppDispatch();

  return (
    <Box display="flex">
      <NumberInput
        display="flex"
        size="sm"
        maxW="68px"
        min={1}
        max={10}
        value={qty}
        contentEditable={false}
        keepWithinRange={true}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            onClick={() => {
              if ((qty as number) < 10) dispatch(increaseQuantity(props.id));
            }}
          >
            +
          </NumberIncrementStepper>
          <NumberDecrementStepper
            onClick={() => {
              if ((qty as number) > 1) dispatch(decreaseQuantity(props.id));
            }}
          >
            -
          </NumberDecrementStepper>
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};
