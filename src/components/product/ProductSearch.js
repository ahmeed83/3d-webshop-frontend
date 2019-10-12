import React from "react";

import {
  InputGroup,
  Input,
  Button,
  InputGroupAddon
} from "reactstrap";

function ProductSearch() {
  return (
    <InputGroup>
      <Input
        type="text"
        className="form-control"
        placeholder="Search for..."
      ></Input>
      <InputGroupAddon addonType="append">
        <Button color="secondary">Go!</Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default ProductSearch;
const ProductSerach = () => {
  return ( "search" );
}
 
export default ProductSerach;