import React from "react";
import { Container, Col, Row } from "reactstrap";
import AdminAddProduct from "./AdminAddProduct";
import AdminTableProduct from "./AdminTableProduct";
import { Card, ListGroup, ListGroupItem } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Admin.css";

const AdminPage = () => {
  return (
    <Router>
      <Container className="text-dark app-text-admin" fluid>
        <Row className="mt-4">
          <Col sm="2">
            <Card>
              <ListGroup>
                <ListGroupItem>
                  <Link to="/admin-product-table">Product List</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin-product-add">Add Product</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin-product-add">Order List</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin-product-add">Customer messages</Link>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm="10">
            <Switch>
              <Route path="/admin" exact>
                <AdminTableProduct />
              </Route>
              <Route path="/admin-product-table">
                <AdminTableProduct />
              </Route>
              <Route path="/admin-product-add">
                <AdminAddProduct />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default AdminPage;
