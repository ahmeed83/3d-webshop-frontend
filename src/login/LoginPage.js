import React from "react";
import "./LoginPage.css";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Jumbotron
} from "reactstrap";

import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

const LoginPage = () => {
  return (
    <Form className="login-form text-dark">
      <Jumbotron>
        <h2 className="text-center mb-4">Welcome!</h2>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>
            Email :
          </Label>
          <Col sm={8}>
            <Input type="email" name="email" placeholder="Type your username" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={3}>
            Password :
          </Label>
          <Col sm={8}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Type your password"
            />
          </Col>
        </FormGroup>
        <Col sm={{ size: 8, offset: 3 }}>
          <Button className="btn-lg btn-dark btn-block mt-4">Log in</Button>
        </Col>
        <div className="text-center pt-3 mt-4">
          Or continue with your social account
        </div>
        <Col sm={{ size: 8, offset: 3 }}>
          <FacebookLoginButton className="mt-3" />
        </Col>
        <Col sm={{ size: 8, offset: 3 }}>
          <GoogleLoginButton className="mt-3" />
        </Col>
        <Col sm={{ size: 8, offset: 3 }}>
          <div className="text-center mt-3 pt-3">
            <a href="/"> Sign up </a>
            <span className="text-center">|</span>
            <a href="/"> Forgot Password </a>
          </div>
        </Col>
      </Jumbotron>
    </Form>
  );
}

export default LoginPage;
