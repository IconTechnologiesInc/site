import React from 'react'
import { Link } from 'gatsby'
import { Container, Navbar, NavbarItem, NavbarBrand, NavbarBurger, NavbarMenu, NavbarEnd, Image } from 'bloomer'
import logo from '../../images/icon_technologies_logo_v3.svg'

const AppHeader = ({ currentPath }) => (
    <Container>
        <Navbar>
            <NavbarBrand>
                <NavbarItem isActive={currentPath === '/'}>
                    <Link to="/">
                        <Image src={logo} style={{ width: 54, display: 'inline-block' }}/>
                        Icon Technologies
                    </Link>
                </NavbarItem>
                <NavbarBurger/>
            </NavbarBrand>

            <NavbarMenu>
                <NavbarEnd>
                    <NavbarItem className="is-tab" isActive={currentPath === '/about/'}><Link to="/about">About</Link></NavbarItem>
                    <NavbarItem className="is-tab" isActive={currentPath === '/careers/'}><Link to="/careers">Careers</Link></NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    </Container>
)

export default AppHeader
