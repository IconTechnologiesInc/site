import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { Container, Navbar, NavbarItem, NavbarBrand, NavbarBurger, NavbarMenu, NavbarEnd, Image } from 'bloomer'
import logo from '../../images/icon_logo_light.svg'

const Nav = styled.div`
    &&& {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding-left: 15px;
        padding-top: 15px;
        z-index: 10;
    }
`

const AppHeader = ({ currentPath }) => {
    currentPath = currentPath.replace(/\/$/, '');
    return (
        <Nav>
            <Link to="/">
                <img src={logo} alt="Icon Technologies, Inc." style={{ height: 75, width: 'auto' }}/>
            </Link>
        </Nav>
        // <Nav transparent>
        //     <NavbarBrand>
        //         <NavbarItem isActive={currentPath === '/'}>
        //             <Link to="/">
        //                 <img src={logo} alt="Icon Technologies, Inc." style={{ display: 'inline-block', height: 54, width: 'auto' }}/>
        //                 {/* <Image src={logo} style={{ width: 54, display: 'inline-block' }}/> */}
        //             </Link>
        //         </NavbarItem>
        //         <NavbarBurger/>
        //     </NavbarBrand>

        //     <NavbarMenu>
        //         <NavbarEnd>
        //             <NavbarItem className="is-tab" isActive={currentPath === '/about'}><Link to="/about">About</Link></NavbarItem>
        //             <NavbarItem className="is-tab" isActive={currentPath === '/careers'}><Link to="/careers">Careers</Link></NavbarItem>
        //         </NavbarEnd>
        //     </NavbarMenu>
        // </Nav>
    )
}

export default AppHeader
