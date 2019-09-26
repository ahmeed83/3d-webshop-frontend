import React from "react";

import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from "reactstrap";

function ProductCategory() {
  return (
    <Card body>
      <CardHeader>Categories</CardHeader>
      <CardBody>
        <ListGroup flush>
          <ListGroupItem tag="a" href="#">
            Computers
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Laptops
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Mobile telefoons
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Computer tools
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Moniters
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            tools
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default ProductCategory;
