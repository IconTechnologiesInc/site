import React from 'react'
import styled from 'styled-components'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'
import VerticalColumns from '../VerticalColumns'
import { TextColor } from '../Text'

// images
import logo from '../../images/icon_logo_light.svg'
import phone from '../../images/009-call.svg'
import email from '../../images/010-paper-plane.svg'
import location from '../../images/012-placeholder.svg'

const FooterStyled = styled(Footer)`
    &&& {
        min-height: 240px;
        background-color: ${props => props.theme.colors.greyDark};
        padding: calc(100vh *.10) 0 0;
        bottom: 0;
        position: fixed;
        width: 100%;
        z-index: -1;
    }    
`

const Copyright = styled.div`
    text-align: center;
    font-size: .9rem;
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 0;
    color: ${props => props.theme.colors.white};
`

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    align-content: flex-start;

    &:before {
        content: "Follow";
        flex: 0 0 auto;
        width: auto;
        order: 0;
        align-self: auto;
        font-weight: 300;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 1.4rem;
        line-height: 1em;
        color: ${props => props.theme.colors.primary};
        display: block;
    }

    &:after {
        height: .1rem;
        flex: 0 0 calc(100% - 6.5rem);
        width: calc(100% - 7.5rem);
        order: 1;
        align-self: auto;
        content: '';
        background: ${props => props.theme.colors.grey};
        opacity: .3;
    }

    > li {
        flex: 0 0 auto;
        width: auto;
        align-self: auto;
        margin-top: 2.5rem;
        font-size: 2rem;
        order: 2;

        i {
            color: ${props => props.theme.colors.greyLight};

            &:hover {
                color: ${props => props.theme.colors.primary};
            }
        }
    }

`

const AppFooter = () => (
  <FooterStyled id="footer">
        
    <VerticalColumns>
        <Column>
            <Container>
                <Columns>
                    {/* Logo */}
                    <Column className="is-3">
                        <img src={logo} alt="Icon Technologies, Inc." style={{ height: 70, width: 'auto' }}/>
                    </Column>

                    {/* Contact */}
                    <Column className="is-3">
                        <VerticalColumns>
                            <Column>
                                <Columns>
                                    <Column className="is-2">
                                        <img src={phone} alt="phone" style={{ height: 30, width: 'auto' }}/>
                                    </Column>
                                    <Column className="is-size-5">
                                        <TextColor as="p" color="greyLighter">443.742.1509</TextColor>
                                    </Column>
                                </Columns>
                            </Column>
                            <Column>
                                <Columns>
                                    <Column className="is-2">
                                        <img src={email} alt="email" style={{ height: 30, width: 'auto' }}/>
                                    </Column>
                                    <Column className="is-size-5">
                                        <TextColor as="p" color="greyLighter">info@icontech.io</TextColor>
                                    </Column>
                                </Columns>                        
                            </Column>
                            <Column>
                                <Columns>
                                    <Column className="is-2">
                                        <img src={location} alt="location" style={{ height: 30, width: 'auto' }}/>
                                    </Column>
                                    <Column className="is-size-5">
                                        <TextColor as="p" color="greyLighter">Washington, DC</TextColor>
                                    </Column>
                                </Columns>                        
                            </Column>
                        </VerticalColumns>
                    </Column>
                    <Column className="is-5 is-offset-1">
                        <SocialList>
                            <li>
                                <a href="https://www.facebook.com/icon.technologies.inc/">
                                    <i className="fa fa-facebook"></i>
                                    {/* <img src={facebook} alt="Facebook" style={{ height: 30, width: 'auto' }}/> */}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/icon-technologies-inc/">
                                    <i className="fa fa-linkedin"></i>
                                    {/* <img src={linkedin} alt="LinkedIn" style={{ height: 30, width: 'auto' }}/> */}
                                </a>                                
                            </li>
                            <li>
                                <a href="https://github.com/IconTechnologiesInc">
                                    <i className="fa fa-github"></i>
                                    {/* <img src={github} alt="Github" style={{ height: 30, width: 'auto' }}/> */}
                                </a>                                
                            </li>
                        </SocialList>
                    </Column>
                </Columns>
            </Container>
        </Column>

        {/* copyright */}
        <Column style={{ marginTop: 45 }}>
            <Copyright>
                <p>Made with<Icon hasTextColor="danger" className="fa fa-heart" /> by Icon Technologies, Inc.</p>
                <p>©2018 Icon Technologies. All rights reserved.</p>
            </Copyright>
        </Column>
    </VerticalColumns>

    
  </FooterStyled>
)

export default AppFooter
