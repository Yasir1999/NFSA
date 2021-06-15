import React from 'react';
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import Search from './Search';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from "./authentication-button";

const Navigation = () => {

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();

    return (
        <>
        {/* Setting the links to pages via Nav.Link items */}
        <Navbar className="colour-nav" expand="xl">
            <Navbar.Brand href="/"><img alt="" src="../../logo192.png" className="navbar-brand"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle navbar-dark"/>
            {/* Added collapsable Navbar when window size gets smaller */}
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center nav-fill nav navbar-brand ">
                <Nav className="adjust-height">


                {/* {isAuthenticated && ( */}
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    {/* )} */}
                    <Nav.Item>
                        <Nav.Link href="/accessrestrictions">Access Restrictions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/charges">Charges</Nav.Link>
                    </Nav.Item>
                    {/*
                    <Nav.Item>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Nav.Item>
                    */}
                    <Nav.Item>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/items">Items</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <div className="navbar-nav ml-auto">
                            <AuthenticationButton />
                         </div>
                    </Nav.Link>
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
        </>
    );
};



export default Navigation;


