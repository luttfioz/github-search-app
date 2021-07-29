import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './../logo.svg';

const NavBarView = () => {
    return (
        <Navbar className="nav" bg="light" variant="dark" sticky="top">
            <Navbar.Brand href="/app">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt=" "></img>
            </Navbar.Brand>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/app">Github Search App</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/maps">Maps</Nav.Link>
            <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/about">About</NavDropdown.Item>
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/maps">Maps</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    );
};

export default NavBarView;