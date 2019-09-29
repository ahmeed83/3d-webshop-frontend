import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  InputGroup,
  Input,
  Button,
  InputGroupAddon
} from "reactstrap";

function ProductSearch() {
  return (
    <Card body>
      <CardHeader>Search</CardHeader>
      <CardBody>
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
      </CardBody>
    </Card>
  );
}

export default ProductSearch;
