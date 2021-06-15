import { Checkbox, Box } from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { useAppSelector } from "../../../../app/hooks";

interface brandFilterProps {
  checkboxHandler: (e: ChangeEvent<HTMLInputElement>, brand: string) => void;
  selectedBrands: Array<string>;
}

const BrandFilter: FC<brandFilterProps> = (props) => {
  let brandOptions: any = [];
  const productsList = useAppSelector((state) => state.product.productsList);

  if (Array.isArray(productsList)) {
    const brands = productsList.map((item) => item.brand);
    const uniqueBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    brandOptions = uniqueBrands.map((brand) => (
      <Checkbox
        isChecked={props.selectedBrands.includes(brand)}
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

export default BrandFilter;
