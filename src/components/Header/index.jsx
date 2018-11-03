import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import raf from 'raf'
import Social from '../Social'
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
    transition: top 200ms ease-in-out;

    &.header--hide {
        top: -105px;
    }

    &.open {
        top: 0;
    }

    @media print {
        display: none;
    }
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

                &:hover, &.active {
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

const SocialWrapper = styled.div`${props => {
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
                padding: 10px 25px 10px 90px;
                width: 225px;

                a {
                    color: ${colors.greyDark};                    
                    font-size: ${fonts.size.medium};

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
        this.didScroll = false;
        this.lastScrollY = 0;
        this.scrollTolerance = 5;
        this.navHeight = 0;

        this.onClick = this.onClick.bind(this);
        this.scrolled = this.scrolled.bind(this);
        this.afterScrolled = this.afterScrolled.bind(this);
    }

    componentDidMount() {
        this.navHeight = this.element.offsetHeight;
        window.addEventListener('scroll', () => {
            if(this.didScroll) return;

            this.didScroll = true;
            raf(this.scrolled);
        });
    }

    onClick() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    afterScrolled(currentScrollY) {
        this.lastScrollY = currentScrollY;
        this.didScroll = false;
    }

    scrolled() {
        const scrollY = window.pageYOffset;
        const { lastScrollY, scrollTolerance, navHeight, element } = this;
        const distanceScrolled = Math.abs(scrollY - lastScrollY);
        const [ showClass, hideClass ] = ['header--show', 'header--hide'];

        // if they've scrolled less than the allowed tolerance then don't do anything
        if(distanceScrolled <= scrollTolerance) return this.afterScrolled(scrollY);

        // if they're scrolling down and past the nav, hide the nav
        if(scrollY > lastScrollY && scrollY > navHeight) {
            element.classList.remove(showClass);
            element.classList.add(hideClass);
        } else {// they're scrolling up, show the nav
            element.classList.remove(hideClass);
            element.classList.add(showClass);
        }

        this.afterScrolled(scrollY);
    }

    setRef = ref => (this.element = ref)

    render() {
        const currentPath = this.props.currentPath.replace(/\/$/, '');
        const openClass = this.state.isOpen ? 'open' : '';

        return (
            <NavStyled ref={this.setRef} className={openClass}>
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
                            {/* @TODO: These anchors should change to gatsby Links once the actual pages exist */}
                            <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>
                                About
                                <span className="description">We're proud of who we are. Learn more about us.</span>
                            </Link>
                        </li>
                        <li>
                            <a className={currentPath === '/services' ? 'active' : ''}>
                                Work
                                <span className="description">Cras volutpat lorem volutpat urna tincidunt.</span>
                            </a>
                        </li>
                        <li>
                            <a className={currentPath === '/services' ? 'active' : ''}>
                                Careers
                                <span className="description">Sed a nisi a ligula blandit molestie sit amet ac sapien.</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>
                                Contact
                                <span className="description">Let's see how we can help you. Get in touch.</span>
                            </Link>
                        </li>
                    </ul>
                    <SocialWrapper><Social/></SocialWrapper>
                </Menu>
            </NavStyled>
        )
    }
}
