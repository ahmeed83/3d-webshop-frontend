import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import LoginPage from "./login/LoginPage";
import ProductDetails from "./product/ProductDetails";
import { Container } from "reactstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/admin-page" component={AdminPage} />
              <Route path="/product/:id" component={ProductDetails} />
            </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
