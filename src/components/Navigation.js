import React from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

function Navigation() {
    return (
        <>
        <Navbar className="colour-nav" expand="sm" sticky="top">
            <Navbar.Brand href="#home">NFSA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center nav-fill nav">
                <Nav className="nfsa-navbar">
                    <Nav.Item>
                    <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#accessrestrictions">Access Restrictions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#charges">Charges</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#help">Help</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#login">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Navbar expand="sm" className="justify-content-center nav-fill nav colour-nav" sticky="top">
            <Nav>
                <Nav.Item>
                    <Form>
                        <Form.Group controlId="searchBar">
                            <Form.Control type="search" placeholder="Search"/>   
                        </Form.Group>
                    </Form>
                </Nav.Item>
            </Nav>
        </Navbar>
        </>
    );
};


export default Navigation;