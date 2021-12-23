import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap'

const myNav = () => {
    return (
        <div >
            <Navbar fixed='top' className="fixed-top">
                <Container >

                    <NavbarBrand href='/'>
                        Chauncey's blog
                    </NavbarBrand>

                    <Nav>
                        <NavItem>
                            <NavLink href='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/blog'>
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/createpost'>
                                Create Post
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>

            </Navbar>
            
        </div>
    )
}

export default myNav
