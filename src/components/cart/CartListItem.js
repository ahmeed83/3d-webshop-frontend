import React from "react";
import { Row, Col, Card, CardImg, Button } from "reactstrap";

const CartListItem = ({ cartItems, setCartItems, setOrderAvailable }) => {
  const deleteItem = cartItem => {
    fetch(`/api/shopping-cart/${cartItem.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: cartItem.id })
    });
    setCartItems(cartItems.filter(item => item !== cartItem));

    // If only one element left, thats mean that the array is empty in the server
    if (cartItems.length === 1) {
      setOrderAvailable(false);
    }
  };

  return (
    <Card className="mt-3" body>
      {cartItems.map(cartItem => (
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
                src={`/upload/${cartItem.productId.imageName}`}
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
              onClick={() => deleteItem(cartItem)}
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
