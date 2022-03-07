import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#top">Frontend Bootcamp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#learn">What You'll Learn</Nav.Link>
            <Nav.Link href="#questions">Questions</Nav.Link>
            <Nav.Link href="#instructors">Instructors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
