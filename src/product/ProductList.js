import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Carousel
} from "reactstrap";

function ProductList() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/products");
      const products = await data.json();
      setProducts(products);
      console.log(products);
    } catch (error) {
      console.log("reason: " + error);
    }
  };

  return (
    <CardColumns>
      {products.map(product => (
        <Card key={product.id}>
          <a href={`/product/${product.id}`} className="stretched-link"></a>
          <CardImg
            top
            width="100%"
            src="http://placehold.it/700x400"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{product.description}</CardTitle>
            <CardSubtitle><h5>Price: ${product.price}</h5></CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </CardColumns>
  );
}

export default ProductList;
