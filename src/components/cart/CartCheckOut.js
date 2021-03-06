import React from "react";
import { Row, Col, Button, Card, CardHeader, CardBody, Form } from "reactstrap";

const CartCheckOut = ({ value }) => {
  const sendOrder = () => {
    fetch("/api/send-email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: 1,
        shoppingCartId: value.id
      })
    });
  };

  return (
    <Form onSubmit={sendOrder}>
      <Card body className="my-5">
        <CardHeader>Make your order</CardHeader>

        <CardBody>
          <Row>
            {/* <Col sm="3" className="my-7">
              <p>Total price: $</p>
            </Col> */}
            <Col sm="9" className="my-7">
              <p>
                We will receive your order if you click the link below. After
                that we will contact you
              </p>
            </Col>
            <Col sm="3" className="my-7">
              <Button
                type="submit"
                color="success"
                block
                onClick={() => sendOrder}
              >
                Order
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Form>
  );
};

export default CartCheckOut;
