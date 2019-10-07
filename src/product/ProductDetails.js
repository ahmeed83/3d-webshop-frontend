import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Label, Input } from "reactstrap";
import FormGroup from "reactstrap/lib/FormGroup";

const ProductDetailsPage = ({match}) => {
  const [product, setProduct] = useState([]);
  const [getQuantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(`/api/products/${match.params.id}`);
      const product = await data.json();
      setProduct(product);
    };
    fetchProduct();
  }, [match.params.id]);

  const addProductToShoppingCart = event => {
    event.preventDefault();

    fetch("/api/shopping-cart/add-item", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shoppingCartId: 1,
        productId: product.id,
        quantity: getQuantity
      })
    });
    window.location.reload(false);
  };

  return (
    <Container>
      <h1 className="my-4">Name: {product.name}</h1>
      <h1 className="my-4">Price: {product.price} $</h1>
      <Row>
        <Col md="8">
          <img
            className="img-fluid mb-5"
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/71246364_3071676162905535_4585475752870281216_n.jpg?_nc_cat=107&_nc_oc=AQksHZ8A16yGLzYX4B__gCmcK4gx9lJr4UNAIAQRBweJ3CiXjhoRbo2ajPmw5hB4FXgyM7ZWPZlU2n1ErTiR7_xZ&_nc_ht=scontent-ams4-1.xx&oh=33f9131fd5d0d3edae5c10e39591f82f&oe=5E36DAF3"
            alt=""
          ></img>
        </Col>
        <Col md="4">
          <Form onSubmit={addProductToShoppingCart}>
            <h2 className="my-3">{product.name}</h2>
            <h5>{product.description}</h5>
            <hr />
            <FormGroup>
              <Label for="exampleSelect">
                How many item you want to order?
              </Label>
              <Input type="select" onChange={e => setQuantity(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Button type="submit" color="info" size="lg" block>
              Add to the shopping list
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetailsPage;
