import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Label,
  Input,
  Popover,
  FormGroup,
  PopoverBody
} from "reactstrap";
import "./Product.css";

const ProductDetailsPage = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [popoverOpen, setPopoverOpen] = useState(false);

  // const checkLoggedIn = () => user === null;
  const onePeace = () => quantity === 1;

  // Get the product
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(`/api/products/${match.params.id}`);
      const product = await data.json();
      setProduct(product);
    };
    fetchProduct();
  }, [match.params.id]);

  // add a product to the cart
  const addProductToShoppingCart = event => {
    event.preventDefault();
    fetch("/api/shopping-cart/add-item", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shoppingCartId: 1,
        productId: product.id,
        quantity: quantity
      })
    });
  };

  const toggle = () => {
    setPopoverOpen(!popoverOpen);
    setTimeout(function() {
      setPopoverOpen(popoverOpen);
    }, 2000);
  };

  return (
    <Container>
      <h1 className="my-4">{product.name} أسم الجهاز</h1>
      <h1 className="my-4"> السعر $ {product.price}</h1>
      <Row>
        <Col md="4">
          <Form onSubmit={addProductToShoppingCart}>
            <h2 className="my-3">{product.name}</h2>
            <h5>{product.description}</h5>
            <hr />
            <FormGroup>
              <Label for="exampleSelect">كم قطعة تريد تشتري؟</Label>
              <Input type="select" onChange={e => setQuantity(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Button id="Popover1" type="submit" color="info" size="lg" block>
              ضيف الجهاز الى قائمة المشتريات
              <Popover
                trigger="click"
                placement="bottom"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={toggle}
              >
                {onePeace() ? (
                  <PopoverBody>انضافت قطعة واحدة لسلة المشتريات</PopoverBody>
                ) : (
                  <PopoverBody>
                    انضافت {quantity} قطع لسلة المشتريات
                  </PopoverBody>
                )}
              </Popover>
            </Button>
          </Form>
        </Col>
        <Col md="8">
          <div className="item">
            <img
              className="img-fluid mb-5"
              src={`/upload/${product.imageName}`}
              alt=""
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetailsPage;
