import React from "react";
import { Row, Col, Card, CardImg, Button } from "reactstrap";

const CartListItem = ({ value }) => {
  const deleteItem = id => {
    fetch(`/api/shopping-cart/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    }).then(res => res.text()); // OR res.json()
    window.location.reload(false);
  };

  return (
    <Card className="mt-3" body>
      {value.map(cartItem => (
        <Row key={cartItem.id}>
          <Col sm="3" className="my-7">
            <a
              href={`/product/${cartItem.productId.id}`}
              className="stretched-link"
            >
              <CardImg
                className="my-1"
                top
                width="100%"
                src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/71246364_3071676162905535_4585475752870281216_n.jpg?_nc_cat=107&_nc_oc=AQksHZ8A16yGLzYX4B__gCmcK4gx9lJr4UNAIAQRBweJ3CiXjhoRbo2ajPmw5hB4FXgyM7ZWPZlU2n1ErTiR7_xZ&_nc_ht=scontent-ams4-1.xx&oh=33f9131fd5d0d3edae5c10e39591f82f&oe=5E36DAF3"
                alt="Card image cap"
              />
            </a>
          </Col>
          <Col sm="6" className="my-5">
            <p>Name: {cartItem.productId.name}</p>
            <p>Price: {cartItem.productId.price} $</p>
            <p>Quantity: {cartItem.quantity}</p>
          </Col>
          <Col sm="3" className="my-5">
            <Button
              href="#"
              color="danger"
              onClick={() => deleteItem(cartItem.id)}
            >
              Remove from order list
            </Button>
          </Col>
          <hr />
        </Row>
      ))}
    </Card>
  );
};

export default CartListItem;
