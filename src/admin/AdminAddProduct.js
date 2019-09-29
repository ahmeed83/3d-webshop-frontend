import React, { useState } from "react";
import {
  Input,
  Jumbotron,
  Button,
  FormGroup,
  Form,
  Label,
  Col,
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function AdminAddProduct(props) {
  const [getCode, setCode] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getPrice, setPrice] = useState("");
  const [getQuantity, setQuantity] = useState("");
  const [getCategoryId, setCategoryId] = useState("");
  const [getCategoryName, setCategoryName] = useState("");

  const createCategory = event => {
    fetch("/api/products/add-category", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: getCategoryName
      })
    });
    window.location.reload(false);
  };

  const createProduct = event => {
    event.preventDefault();
    fetch("/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: getCode,
        description: getDescription,
        price: getPrice,
        quantity: getQuantity,
        categoryId: getCategoryId
      })
    });
    window.location.reload(false);
  };

  return (
    <Jumbotron>
      <h5 className="mb-3">Category</h5>
      <Card className="p-4">
        <Form onSubmit={createCategory}>
          <FormGroup row>
            <Label for="categoryId" sm={2}>
              Add Category
            </Label>
            <Col sm={3}>
              <Input
                type="category"
                name="category"
                id="categoryId"
                value={getCategoryName}
                onChange={e => setCategoryName(e.target.value)}
              />
            </Col>
            <Col sm={3}>
              <Button color="primary">Add category</Button>
            </Col>
          </FormGroup>
        </Form>
      </Card>
      <h5 className="mt-3">Product</h5>
      <Card className="mt-3 p-4">
        <Form onSubmit={createProduct}>
          <FormGroup row>
            <Label for="categoryId" sm={2}>
              Choose Category
            </Label>
            <Col sm={3}>
              <UncontrolledDropdown direction="right">
                <DropdownToggle caret>Categories</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            <Label sm={2}></Label>
            <Col sm={3}>
              <Button color="info">Upload picture for the product</Button>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="productName" sm={2}>
              Add Product Name
            </Label>
            <Col sm={3}>
              <Input
                type="productName"
                name="productName"
                id="productName"
                value={getDescription}
                onChange={e => setDescription(e.target.value)}
              />
            </Col>
            <Label for="productCode" sm={2}>
              Add Product Code
            </Label>
            <Col sm={3}>
              <Input
                type="productCode"
                name="productCode"
                id="productCode"
                value={getCode}
                onChange={e => setCode(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>
              Add Quantity
            </Label>
            <Col sm={3}>
              <Input
                type="quantity"
                name="quantity"
                id="quantity"
                value={getQuantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </Col>
            <Label for="price" sm={2}>
              Add Price
            </Label>
            <Col sm={3}>
              <Input
                type="price"
                name="price"
                id="price"
                min={0}
                max={10000}
                type="number"
                step="1"
                value={getPrice}
                onChange={e => setPrice(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="price" sm={2}>
              Add product description
            </Label>
            <Col sm={10}>
              <textarea className="form-control" rows="3"></textarea>
            </Col>
          </FormGroup>
          <Button className="mt-3" type="submit" color="primary" size="lg">
            Add product
          </Button>
        </Form>
      </Card>
    </Jumbotron>
  );
}

export default AdminAddProduct;
