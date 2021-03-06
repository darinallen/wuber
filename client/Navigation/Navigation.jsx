import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';

const Navigation = () => (
  <Navbar className="navigation" inverse staticTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Wuber</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/add">
          <NavItem eventKey={1} href="#">Add</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/cart">
          <NavItem eventKey={1} href="#">Cart</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
