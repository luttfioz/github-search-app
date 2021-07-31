import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './../logo.svg';
import { routes } from './../routes'

const logout = () => {
    localStorage.clear();
    document.location.href = "/";
}

const NavBarView = (props) => {
    const { isLoggedIn } = props;
    const { login, app, about, maps } = routes;
    const homeUrl = isLoggedIn ? app.path : login.path

    if (!isLoggedIn) {
        return (
            <Navbar className="nav" bg="light" variant="dark" sticky="top">
                <Navbar.Brand href={homeUrl}>
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt=" "></img>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href={login.path}>{login.title}</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    return (
        <Navbar className="nav" bg="light" variant="dark" sticky="top">
            <Navbar.Brand href={homeUrl}>
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt=" "></img>
            </Navbar.Brand>
            <Nav.Link href={app.path}>{app.title}</Nav.Link>
            <Nav.Link href={about.path}>{about.title}</Nav.Link>
            <Nav.Link href={maps.path}>{maps.title}</Nav.Link>
            <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item style={{ color: "#5299d3" }} href={about.path}>{about.title}</NavDropdown.Item>
                <NavDropdown.Item style={{ color: "#5299d3" }} href={maps.path}>{maps.title}</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link onClick={logout} >Logout</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarView;