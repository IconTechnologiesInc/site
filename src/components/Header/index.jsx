import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
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
    )
}

export default AppHeader
