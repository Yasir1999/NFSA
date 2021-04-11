import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import Search from './Search';
import 'font-awesome/css/font-awesome.min.css';

function Navigation() {
    return (
        <>
        {/* Setting the links to pages via Nav.Link items */}
        <Navbar className="colour-nav" expand="xl">
            <Navbar.Brand href="/"><img alt="" src="../../logo192.png" className="navbar-brand"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle navbar-dark"/>
            {/* Added collapsable Navbar when window size gets smaller */}
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center nav-fill nav navbar-brand">
                <Nav className="adjust-height" id="basic-navbar-nav">
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
            <Container className="container-height" >
            <div className="searchbar-align">
                <div className="nfsa-search">
                    <Search />
                </div>

                <div className="form-group search-icon">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/> 
                </div>
            </div>
            </Container>
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


