import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Header() {
  const navStyle = {
    color: "lightblue"
  };


  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">3D Computers</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink style={navStyle} href="/admin-page/">
            Admin Page
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={navStyle} href="/login/">
            Log in
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>

    
  );
}

export default Header;



{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div className="container">
  <a className="navbar-brand" href="/">3D Computers</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item">
        <a className="nav-link" href="/admin-page/">Admin page</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">will decide</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login/">Log in</a>
      </li>
    </ul>
  </div>
</div>
</nav> */}