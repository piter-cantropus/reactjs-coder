import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../img/logo.png';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

function ShowNavBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo de la repuestera"
        />
        &nbsp;La Repuestera
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#inicio">Inicio</Nav.Link> */}
            <Nav.Link as={Link} to="/category/indumentaria">Indumentaria</Nav.Link>
            <Nav.Link as={Link} to="/category/motor">Motor</Nav.Link>
            <Nav.Link as={Link} to="/category/cascos">Cascos</Nav.Link>
            {/* <Nav.Link href="#contacto">Contacto</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#carrito">
              <CartWidget cantidad={2} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default ShowNavBar;
