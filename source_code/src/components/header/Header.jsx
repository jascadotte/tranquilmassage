import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">Tranquil Massage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#/packages">Packages</Nav.Link>
            <Nav.Link href="#/specialists">Specialists</Nav.Link>
            <Nav.Link href="#/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

