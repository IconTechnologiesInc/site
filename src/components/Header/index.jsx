import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import logo from '../../images/icon_logo.svg'

const NavStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 12px;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.toHSLA(theme.colors.white, .2)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
`

const NavBurgerMenu = styled.a.attrs({ role: 'button', 'aria-label': 'menu', className: 'nav-burger' })`
    ${props => {
        const { colors } = props.theme;
        const burgerColor = colors.grey;
        
        return css`
            position: relative;
            width: 35px;
            height: 35px;
            cursor: pointer;
            z-index: 10;

            &:hover > div {
                background-color: ${colors.secondary};
            }

            &.open {
                > div {
                    transition: opacity .2s ease, background .2s ease, top .2s ease, transform .2s ease .2s;

                    &:nth-child(1) {
                        top: calc(50% - 1px);
                        transform: rotate(45deg) !important;
                    }

                    &:nth-child(2) {
                        background: ${colors.toTransparent(burgerColor)}
                    }

                    &:nth-child(3) {
                        top: calc(50% - 1px);
                        transform: rotate(-45deg) !important;
                    }
                }
            }

            > div {
                position: absolute;
                height: 2px;
                background: ${burgerColor};
                width: 75%;
                transition: opacity .2s ease,background .2s ease,top .2s ease .2s,transform .2s ease;

                &:nth-child(1) {
                    top: calc(50% - 8px);
                }

                &:nth-child(2) {
                    top: calc(50% - 1px);
                }

                &:nth-child(3) {
                    top: calc(50% + 6px);
                }
            }
        `
    }}
`

const Menu = styled.div`${props => {
    const { colors, fonts } = props.theme;
    return css`
        position: fixed;
        top: 0;
        right: -20px;
        opacity: 0;
        visibility: hidden;
        min-height: 50vh;
        min-width: 300px;
        z-index: 9;
        background-color: ${colors.greyDark};
        transition: opacity .35s ease-in-out, visibility .35s ease-in-out, right .3s ease-out;
        padding: 120px 40px 30px 60px;

        &.open {
            visibility: visible;
            opacity: 1;
            right: 0;
        }

        > ul {
            > li > a {
                color: ${colors.greyLighter};
                border-left: 3px solid ${colors.greyLighter};
                padding: 10px;
                display: block;
                font-size: ${fonts.size.medium};

                &:hover {
                    border-left-color: ${colors.secondary};
                    color: ${colors.secondary};
                }

                .description {
                    display: block;
                    color: ${colors.greyLight};
                    font-size: ${fonts.size.smaller};
                }
            }
        }
    `
}}`

const Social = styled.div`${props => {
    const { colors, fonts } = props.theme;
    return css`
        &&& {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: ${colors.primary};
            clip-path: polygon(35% 0,100% 0,100% 100%,0 100%);

            > ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 25px 15px 90px;
                width: 225px;

                a {
                    color: ${colors.greyDark};                    
                    font-size: ${fonts.size.small};

                    &:hover {
                        color: ${colors.grey};
                    }
                }
            }
        }
`}}`
    

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const currentPath = this.props.currentPath.replace(/\/$/, '');
        const openClass = this.state.isOpen ? 'open' : '';

        return (
            <NavStyled>
                <Link to="/">
                    <img src={logo} alt="Icon Technologies, Inc." style={{ height: 75, width: 'auto' }}/>
                </Link>
                <NavBurgerMenu onClick={this.onClick} className={openClass}>
                    <div></div>
                    <div></div>
                    <div></div>
                </NavBurgerMenu>
                <Menu className={openClass}>
                    <ul>
                        <li>
                            <a>
                                Services
                                <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                Work
                                <span className="description">Cras volutpat lorem volutpat urna tincidunt.</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                Careers
                                <span className="description">Sed a nisi a ligula blandit molestie sit amet ac sapien.</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                Contact
                                <span className="description"> Nunc sit amet magna aliquet mauris lobortis facilisis.</span>
                            </a>
                        </li>
                    </ul>
                    <Social>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/icon.technologies.inc/">
                                    <i className="fa fa-facebook"></i>
                                    {/* <img src={facebook} alt="Facebook" style={{ height: 30, width: 'auto' }}/> */}
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/icon-technologies-inc/">
                                    <i className="fa fa-linkedin"></i>
                                    {/* <img src={linkedin} alt="LinkedIn" style={{ height: 30, width: 'auto' }}/> */}
                                </a>                                
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/IconTechnologiesInc">
                                    <i className="fa fa-github"></i>
                                    {/* <img src={github} alt="Github" style={{ height: 30, width: 'auto' }}/> */}
                                </a>                                
                            </li>
                        </ul>
                    </Social>
                </Menu>
            </NavStyled>
        )
    }
}
