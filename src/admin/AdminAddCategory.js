import React, { useState } from "react";
import { Input, Button, FormGroup, Form, Label, Col, Card } from "reactstrap";

function AdminAddCategory() {
  const [getCategoryName, setCategoryName] = useState("");

  const createCategory = event => {
    fetch("/api/products/add-category", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: getCategoryName
      })
    });
    window.location.reload(false);
  };

  return (
    <div>
      <h5 className="mb-3">Category</h5>
      <Card className="p-4">
        <Form onSubmit={createCategory}>
          <FormGroup row>
            <Label for="categoryId" sm={2}>
              Add Category
            </Label>
            <Col sm={3}>
              <Input
                type="category"
                name="category"
                id="categoryId"
                value={getCategoryName}
                onChange={e => setCategoryName(e.target.value)}
              />
            </Col>
            <Col sm={3}>
              <Button color="primary">Add category</Button>
            </Col>
          </FormGroup>
        </Form>
      </Card>
    </div>
  );
}

export default AdminAddCategory;