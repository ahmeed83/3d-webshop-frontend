import React from "react";
import { Container } from "reactstrap";
import AdminAddProduct from "./AdminAddProduct";
import AdminTableProduct from "./AdminTableProduct";

function AdminPage() {
  return (
    <Container className="text-dark">
      <AdminAddProduct />
      <AdminTableProduct />
    </Container>
  );
}

export default AdminPage;
