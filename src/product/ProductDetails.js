import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Card, CardBody } from "reactstrap";
import CardHeader from "reactstrap/lib/CardHeader";
import FormGroup from "reactstrap/lib/FormGroup";

function ProductDetails({ match }) {
  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState([]);

  // let productMock = require('../src/mocks/data.json');

  const fetchProduct = async () => {
    const data = await fetch(`/api/products/${match.params.id}`);
    const product = await data.json();
    setProduct(product);
  };

  return (
    <Container>
      <h1 className="my-4">Name: {product.description}</h1>
      <h1 className="my-4">Price: {product.price} $</h1>

      <Row>
        <Col md="8">
          <img
            className="img-fluid"
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/71246364_3071676162905535_4585475752870281216_n.jpg?_nc_cat=107&_nc_oc=AQksHZ8A16yGLzYX4B__gCmcK4gx9lJr4UNAIAQRBweJ3CiXjhoRbo2ajPmw5hB4FXgyM7ZWPZlU2n1ErTiR7_xZ&_nc_ht=scontent-ams4-1.xx&oh=33f9131fd5d0d3edae5c10e39591f82f&oe=5E36DAF3"
            alt=""
          ></img>
          <Card className="my-4">
            <CardHeader>
              Leave a comment:
              <CardBody>
                <FormGroup>
                  <textarea className="form-control" rows="3"></textarea>
                </FormGroup>
                <Button color="primary" size="lg" type="submit">
                  Submit
                </Button>
              </CardBody>
            </CardHeader>
          </Card>
          <div className="media mb-4">
            <img
              className="d-flex mr-3 rounded-circle"
              src="http://placehold.it/50x50"
              alt=""
            />
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
          <div className="media mb-4">
            <img
              className="d-flex mr-3 rounded-circle"
              src="http://placehold.it/50x50"
              alt=""
            />
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <div className="media mt-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md="4">
          <h3 className="my-3">BRAND SAMA CASE BEST QUALITY - CHEEP PRICE </h3>
          <p>
            <p> ملاحظه: الكيسات تاتي بدون فان ويمكنك اضافه الفانات </p>
            <p>
              الكراده شارع الصناعه ٥٢ مقابل الجامعه التكنلوجيه مجمع النعمان مكتب
              (3D) # عطله الشركه الجمعه # من الساعه ٩ صباحا وحتى ال 7 مساءا
            </p>
          </p>
          <h3 className="my-3">Project Description</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
          <Button color="info" size="lg" block>
            Add to the shopping list
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
