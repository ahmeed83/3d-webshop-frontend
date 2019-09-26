import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Jumbotron,
  Button,
  FormGroup,
  Form
} from "reactstrap";

function AdminPage(props) {
  const [getCode, setCode] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getPrice, setPrice] = useState("");
  const [getQuantity, setQuantity] = useState("");
  const [getCategoryId, setCategoryId] = useState("");

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
    //after submit redirect to the home page
    props.history.push("/");
    window.location.reload();
  };

  return (
    <Jumbotron>
      <Form onSubmit={createProduct}>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Category ID</InputGroupText>
            </InputGroupAddon>
            <Input
              value={getCategoryId}
              onChange={e => setCategoryId(e.target.value)}
            />
          </InputGroup>
          &nbsp;
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Product Name</InputGroupText>
            </InputGroupAddon>
            <Input
              value={getDescription}
              onChange={e => setDescription(e.target.value)}
            />
          </InputGroup>
          &nbsp;
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Product Code</InputGroupText>
            </InputGroupAddon>
            <Input value={getCode} onChange={e => setCode(e.target.value)} />
          </InputGroup>
          &nbsp;
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button>Upload a pic</Button>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          &nbsp;
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Quantity</InputGroupText>
            </InputGroupAddon>
            <Input
              value={getQuantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </InputGroup>
          &nbsp;
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input
              placeholder="Amount"
              min={0}
              max={10000}
              type="number"
              step="1"
              value={getPrice}
              onChange={e => setPrice(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary" size="lg">
            Add product
          </Button>
        </FormGroup>
      </Form>
    </Jumbotron>
  );
}

export default withRouter(AdminPage);
