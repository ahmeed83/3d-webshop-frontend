import React, { useState, useEffect } from "react";
import {
  CardHeader,
  CardBody,
  Table,
  Card,
  Jumbotron,
  Button
} from "reactstrap";

function AdminTableProduct() {
  useEffect(() => {
    fetchProducts();
  }, []);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/products");
      const products = await data.json();
      setProducts(products);
    } catch (error) {
      console.log("reason: " + error);
    }
  };

  const deleteProduct = id => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    }).then(res => res.text()); // OR res.json()
    window.location.reload(false);
  };

  return (
    <Jumbotron>
      <h5 className="mb-3">Product list</h5>
      <Card>
        <CardHeader>Data Table Products</CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            {products.map((product, index) => (
              <tbody key={product.id}>
                <tr>
                  <th scope="row">{index}</th>
                  <td>{product.category}</td>
                  <td>{product.name}</td>
                  <td>{product.code}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Button
                      type="submit"
                      color="danger"
                      block
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </CardBody>
      </Card>
    </Jumbotron>
  );
}

export default AdminTableProduct;
