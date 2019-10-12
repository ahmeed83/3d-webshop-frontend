import React from "react";
import {
  CardHeader,
  CardBody,
  Table,
  Card,
  Jumbotron,
  Button
} from "reactstrap";

import Provider from "service/ListProductsProvider";
import Context from "service/context";

const AdminTableProduct = () => {
  return (
    <Jumbotron>
      <Card>
        <h5 className="mb-3">Product list</h5>
        <CardHeader>Data Table Products</CardHeader>
        <CardBody>
          <Provider>
            <Context.Consumer>
              {context => (
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
                  {context.products.map((product, index) => (
                    <tbody key={product.id}>
                      <tr>
                        <th scope="row">{index}</th>
                        <td>{product.categoryName}</td>
                        <td>{product.name}</td>
                        <td>{product.code}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <Button
                            type="submit"
                            color="danger"
                            block
                            onClick={() => context.deleteProduct(product.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              )}
            </Context.Consumer>
          </Provider>
        </CardBody>
      </Card>
    </Jumbotron>
  );
};

export default AdminTableProduct;
