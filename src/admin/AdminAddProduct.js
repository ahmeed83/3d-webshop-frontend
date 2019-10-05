import React, { useState, useEffect } from "react";
import {
  Input,
  Jumbotron,
  Button,
  FormGroup,
  Form,
  Label,
  Col,
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from "reactstrap";

import AdminAddCategory from "./AdminAddCategory";
import AdminUploadPic from "./AdminUploadPic";

function AdminAddProduct(props) {
  const [getCode, setCode] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getPrice, setPrice] = useState("");
  const [getQuantity, setQuantity] = useState("");
  const [getCategoryId, setCategoryId] = useState("");
  const [getProductName, setProductName] = useState("");
  const [categories, setCategories] = useState([]);

  const [getImage, setImage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await fetch("/api/products/categories");
      const categories = await data.json();
      setCategories(categories);
    } catch (error) {
      console.log("reason: " + error);
    }
  };

  const createProduct = event => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image", getImage);
    formData.append("code", getCode);
    formData.append("name", getProductName);
    formData.append("description", getDescription);
    formData.append("price", getPrice);
    formData.append("quantity", getQuantity);
    formData.append("categoryId", getCategoryId);

    fetch("/api/products", {
      method: "post",
      body: formData
    }).then(res => {
      if (res.ok) {
        alert("File uploaded successfully.");
      }
    });
    window.location.reload(false);
  };

  return (
    <Jumbotron>
      <AdminAddCategory />

      <h5 className="mt-3">Product</h5>
      <Card className="mt-3 p-4">
        <Form onSubmit={createProduct}>
          <FormGroup row>
            <Label for="categoryId" sm={2}>
              Choose Category
            </Label>
            <Col sm={3}>
              <UncontrolledDropdown direction="right">
                <DropdownToggle caret>Categories</DropdownToggle>
                <DropdownMenu right>
                  {categories.map(category => (
                    <div key={category.id}>
                      <DropdownItem
                        value={category.id}
                        onClick={e => setCategoryId(e.target.value)}
                      >
                        {category.name}
                      </DropdownItem>
                    </div>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            <Label sm={2}></Label>
            <Col sm={4}>
              <AdminUploadPic setImage={setImage} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="productName" sm={2}>
              Add Product Name
            </Label>
            <Col sm={3}>
              <Input
                type="productName"
                name="productName"
                id="productName"
                value={getProductName}
                onChange={e => setProductName(e.target.value)}
              />
            </Col>
            <Label for="productCode" sm={2}>
              Add Product Code
            </Label>
            <Col sm={4}>
              <Input
                type="productCode"
                name="productCode"
                id="productCode"
                value={getCode}
                onChange={e => setCode(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>
              Add Quantity
            </Label>
            <Col sm={3}>
              <Input
                type="quantity"
                name="quantity"
                id="quantity"
                value={getQuantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </Col>
            <Label for="price" sm={2}>
              Add Price
            </Label>
            <Col sm={4}>
              <Input
                name="price"
                id="price"
                min={0}
                max={10000}
                type="number"
                step="1"
                value={getPrice}
                onChange={e => setPrice(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="price" sm={2}>
              Add product description
            </Label>
            <Col sm={10}>
              <textarea
                className="form-control"
                type="productName"
                name="productName"
                id="productName"
                value={getDescription}
                onChange={e => setDescription(e.target.value)}
                rows="3"
              ></textarea>
            </Col>
          </FormGroup>
          <Row>
            <Button className="mt-3" type="submit" color="primary" size="lg">
              Add product
            </Button>
          </Row>
        </Form>
      </Card>
    </Jumbotron>
  );
}

export default AdminAddProduct;
