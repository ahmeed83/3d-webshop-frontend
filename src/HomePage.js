import React from "react";
import ProductList from "./product/ProductList";
import ProductCarouse from "./product/ProductCarouse";
import ProductSearch from "./product/ProductSearch";
import ProductCategory from "./product/ProductCategory";
import { Container, Col, Row } from "reactstrap";

function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col lg="9">
          <div className="mt-3">
            <ProductCarouse />
          </div>
          <div className="mt-3">
            <ProductList />
          </div>
        </Col>
        <Col lg="3">
          <div className="mt-3">
            <ProductSearch />
          </div>
          <div className="mt-3">
            <ProductCategory />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default HomePage;
