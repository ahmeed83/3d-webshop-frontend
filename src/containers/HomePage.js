import React from "react";
import ProductList from "components/product/ProductList";
import ProductCarouse from "components/product/ProductCarouse";
import { Container, Col, Row } from "reactstrap";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col lg="12">
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
};

export default HomePage;
