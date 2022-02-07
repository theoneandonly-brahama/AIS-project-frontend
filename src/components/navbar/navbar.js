import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

function navbar() {
  return (
    <Navbar
      expand="sm"
      style={{ backgroundColor: "#4F77AA", height: "48px" }}
      variant="dark"
    >
      <Navbar.Brand>
        <FontAwesomeIcon icon={faAnchor} />
        E-AIS Tracker
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav nav-link" to="/">
          Home Page
        </Link>

        <Link className="nav nav-link" to="/123">
          error
        </Link>
      </Nav>
    </Navbar>
  );
}

export default navbar;
