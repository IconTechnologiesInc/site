import React from 'react'
import styled from 'styled-components'
import { Footer, Container, Columns, Column, Icon, Image } from 'bloomer'
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

const ContactInfoStyled = styled(Column)`
    &&& {
        display: flex;
        flex-basis: auto;
        margin-bottom: 20px;
    
        figure {
            margin-right: 25px;
        }
    }
`

const AppFooter = () => (
  <FooterStyled id="footer">
    <VerticalColumns>
        <Column>
            <Container style={{ paddingRight: 25, paddingLeft: 25 }}>
                <Columns>
                    {/* Logo */}
                    <Column className="is-3">
                        <img src={logo} alt="Icon Technologies, Inc." style={{ height: 70, width: 'auto' }}/>
                    </Column>

                    {/* Contact */}
                    <Column className="is-3">
                        <VerticalColumns>
                            <ContactInfoStyled>
                                <Image src={phone} alt="phone" className="is-32x32"/>
                                <TextColor as="span" color="greyLighter">443.742.1509</TextColor>
                            </ContactInfoStyled>
                            <ContactInfoStyled>
                                <Image src={email} alt="email" className="is-32x32"/>
                                <TextColor as="span" color="greyLighter">info@icontech.io</TextColor>                       
                            </ContactInfoStyled>
                            <ContactInfoStyled>
                                <Image src={location} alt="location" className="is-32x32"/>
                                <TextColor as="span" color="greyLighter">Washington, DC</TextColor>                     
                            </ContactInfoStyled>
                        </VerticalColumns>
                    </Column>
                    <Column className="is-5 is-offset-1">
                        <SocialList>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/icon.technologies.inc/">
                                    <i className="fab fa-facebook"></i>
                                    {/* <img src={facebook} alt="Facebook" style={{ height: 30, width: 'auto' }}/> */}
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/icon-technologies-inc/">
                                    <i className="fab fa-linkedin"></i>
                                    {/* <img src={linkedin} alt="LinkedIn" style={{ height: 30, width: 'auto' }}/> */}
                                </a>                                
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/IconTechnologiesInc">
                                    <i className="fab fa-github"></i>
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
