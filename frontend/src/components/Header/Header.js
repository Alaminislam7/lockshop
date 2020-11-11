import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link>
                                <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
                            <NavDropdown title='ALAMIN' id='username'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Logout
                  </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <i className='fas fa-user'></i> Sign In
                  </Nav.Link>

                            <NavDropdown title='Admin' id='adminmenu'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
