import React from "react";
import "./Product.css";
import {
  Card,
  CardImg,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";

import Provider from "service/ListProductsProvider";
import Context from "service/context";

const ProductList = () => {
  return (
    <Provider>
      <Context.Consumer>
        {context => (
          <CardColumns>
            {context.products.map(product => (
              <Card className="background-list" key={product.id}>
                <a href={`/product/${product.id}`} className="stretched-link">
                  <CardImg
                    top
                    width="100%"
                    src={`/upload/${product.imageName}`}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>
                    <h5>Price: ${product.price}</h5>
                  </CardSubtitle>
                </CardBody>
              </Card>
            ))}
          </CardColumns>
        )}
      </Context.Consumer>
    </Provider>
  );
}

export default ProductList;
