import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = props => {
  const navigations = props.navigation;
  const name = props.name;

  const menuList = navigations.map((menu, i) => (
    <Nav.Link href={menu.link}>{menu.value}</Nav.Link>
  ));

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">{menuList}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
