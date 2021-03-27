import React from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Col, Row, Container, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import Search from './Search';
import 'font-awesome/css/font-awesome.min.css';

function Navigation() {
    return (
        <>
        {/* Setting the links to pages via Nav.Link items */}
        <Navbar className="colour-nav" expand="sm">
            <Navbar.Brand href="/"><img alt="" src="../../logo192.png" className="navbar-brand"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav navbar-brand"/>
            {/* Added collapsable Navbar when window size gets smaller */}
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center nav-fill nav navbar-brand">
                <Nav>
                    <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/accessrestrictions">Access Restrictions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/charges">Charges</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/help">Help</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div class="input-group justify-content-center nav-fill nav colour-nav">
            <div className="nfsa-search row">
                <div className="nfsa-search col-xs-6">
                    <Search />
                </div>

                <div className="form-group search-icon col-xs-6">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/> 
                </div>
            </div>
        </div>
     {/*
        <Navbar className="justify-content-center nav-fill nav colour-nav">
            <Nav>
                <Nav.Item>
                    <Form>
                        <Row>
                            <Form.Label size="lg">
                                <Search/>
                            </Form.Label>
                            <Form.Group controlId="searchBar">
                                <Form.Control type="search" placeholder="Search"/>   
                            </Form.Group>
                        </Row>
                    </Form>
                </Nav.Item>
            </Nav>
     </Navbar>  */}
        
        </>
    );
};


export default Navigation;


