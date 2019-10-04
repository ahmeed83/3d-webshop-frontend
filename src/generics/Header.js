import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import "./Header.css";

import ProductSearch from "../product/ProductSearch";


function Header() {
  const navStyle = {
    color: "lightblue"
  };

  return (
    <Navbar style={navStyle} dark expand="md">
      <div className="navbar-brand">
        <img
          className="circular"
          src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/16174943_1348716395201529_3730483476533975644_n.png?_nc_cat=110&_nc_oc=AQlzv8CU8ZxID4lUzLzPxQMjW3d1xwMF61ri8WKPDC2acoNUXJq7xcSBBAiUaXOie4ejwVtexWcl9Ofe5H1O2X-p&_nc_ht=scontent-ams4-1.xx&oh=07852f456d2752dfec90cdda2db54870&oe=5E326CF4"
          alt=""
        />
      </div>
      <NavbarBrand href="/">3D Computers</NavbarBrand>
      <Nav className="ml-auto" navbar>
      <NavItem>
          <NavLink href="#">
          <ProductSearch />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/">
            Admin Page
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cart">
            <Icon size={32} icon={shoppingCart} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login/">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
       {/* <Col lg="3">
          <div className="mt-3">
            <ProductSearch />
          </div>
          <div className="mt-3">
            <ProductCategory />
          </div>
        </Col> */}