import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody
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
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/71246364_3071676162905535_4585475752870281216_n.jpg?_nc_cat=107&_nc_oc=AQksHZ8A16yGLzYX4B__gCmcK4gx9lJr4UNAIAQRBweJ3CiXjhoRbo2ajPmw5hB4FXgyM7ZWPZlU2n1ErTiR7_xZ&_nc_ht=scontent-ams4-1.xx&oh=33f9131fd5d0d3edae5c10e39591f82f&oe=5E36DAF3"
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
