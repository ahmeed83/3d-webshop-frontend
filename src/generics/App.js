import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.css";

import HomePage from "./HomePage";
import Footer from "./Footer";
import AdminPage from "../admin/AdminPage";
import LoginPage from "../login/LoginPage";
import ProductDetailsPage from "../product/ProductDetails";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "../cart/CartPage";

function App() {
  return (
    <Router>
      <Container className="backround-app text-white" fluid>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:id" component={ProductDetailsPage} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
