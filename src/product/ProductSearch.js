import React from "react";

import {
  Card,
  CardBody,
  CardHeader
} from "reactstrap";

function ProductSearch() {
  return (
    <Card body>
      <CardHeader>Search</CardHeader>
      <CardBody>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." />
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">
              Go!
            </button>
          </span>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductSearch;
