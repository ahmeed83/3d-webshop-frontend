import React from "react";
import { Row, Col, Card, CardImg } from "reactstrap";

function CardEmptyPage() {
  return (
    <Card className="mt-3" body>
      <Row>
        <Col sm="4" className="my-7"></Col>
        <Col sm="4" className="my-5">
          <p>Your shopping cart is empty</p>
          <CardImg
            className="my-1"
            top
            width="100%"
            src="https://chillydraji.files.wordpress.com/2015/08/empty_cart.jpeg"
            alt="Card image cap"
          />
        </Col>
        <Col sm="4" className="my-5"></Col>
        <hr />
      </Row>
    </Card>
  );
}

export default CardEmptyPage;
