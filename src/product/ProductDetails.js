import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  Jumbotron
} from "reactstrap";

function ProductDetails({ match }) {
  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState([]);
  
  // let productMock = require('../src/mocks/data.json');

  const fetchProduct = async () => {
    const data = await fetch(
      `/api/products/${match.params.id}`
    );
    const product = await data.json();
    setProduct(product);
  };

  return (
    <Jumbotron>
      <Card key={product.id}>
        <CardImg
          top
          width="100%"
          // src="/src/assets/256x186.svg"
          // alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Product Name: {product.description} </CardTitle>
          <CardSubtitle>Product Price: {product.price}</CardSubtitle>
          <CardSubtitle>Product quaninty: {product.quantity}</CardSubtitle>
        </CardBody>
      </Card>
      <Button color="info" href="/">back</Button>
    </Jumbotron>
  );
}

export default ProductDetails;
