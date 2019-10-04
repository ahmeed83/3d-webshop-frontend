import React from "react";
import ProductList from "../product/ProductList";
import ProductCarouse from "../product/ProductCarouse";
import { Container, Col, Row } from "reactstrap";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div>
            hello
          </div>
          <div className="mt-3">
            <ProductCarouse />
          </div>
          <div className="mt-3">
            <ProductList />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default HomePage;
