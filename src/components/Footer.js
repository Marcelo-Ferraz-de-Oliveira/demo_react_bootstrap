import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <Navbar variant="success" bg="dark" className="p-5">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Copyright © 2022 Frontent Bootcamp
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#top">
            <BsArrowUpCircle size="2em" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
