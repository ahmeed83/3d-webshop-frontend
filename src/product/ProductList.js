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

import Provider from "../service/ListProductsProvider";
import Context from "../service/context";

const ProductList = () => {
  return (
    <Provider>
      <Context.Consumer>
        {context => (
          <CardColumns>
            {context.products.map(product => (
              <Card className="backround-list" key={product.id}>
                <a href={`/product/${product.id}`} className="stretched-link">
                  <CardImg
                    top
                    width="100%"
                    src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/71246364_3071676162905535_4585475752870281216_n.jpg?_nc_cat=107&_nc_oc=AQksHZ8A16yGLzYX4B__gCmcK4gx9lJr4UNAIAQRBweJ3CiXjhoRbo2ajPmw5hB4FXgyM7ZWPZlU2n1ErTiR7_xZ&_nc_ht=scontent-ams4-1.xx&oh=33f9131fd5d0d3edae5c10e39591f82f&oe=5E36DAF3"
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
