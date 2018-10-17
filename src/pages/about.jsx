import React from 'react'
import { Container, Columns, Column, Hero, HeroBody, Image, Section } from 'bloomer'
import Button from '../components/Button'
import { Subtitle, TextColor, Title } from '../components/Text'
import NumberedList from '../components/NumberedList'
import VerticalColumns from '../components/VerticalColumns'
import Layout from '../layouts'
import styled, { css } from 'styled-components'
import { Emerge } from 'react-emergence'

// images
import basisPathLogo from '../images/basispath_bw.jpg'
import lockeedLogo from '../images/lm.png'
import pivotalLogo from '../images/pivotal_bw.png'
import cseLogo from '../images/cse_bw.png'
import nextrevLog from '../images/nextrev_bw.png'
import bulb from '../images/bulb.jpeg'
import people from '../images/004-work.svg'
import partners from '../images/002-team.svg'
import customers from '../images/003-group.svg'
import lincoln from '../images/lincoln-memorial.jpeg'

const Info = styled(Column).attrs({ className: 'is-5-fullhd is-6-widescreen is-7-desktop is-8-tablet has-text-white' })`
    &&& {
        margin-left: -1.55rem;
        margin-top: -4rem;
        padding: 100px 0;
        position: relative;
        background-color: ${props => props.theme.colors.secondary};
        z-index: 1;

        ${props => props.theme.responsiveness.mobile(`
            border-right: none;
            margin-top: -3rem;
            margin-left: inherit;

            &:after {
                content: "";
            }
        `)}
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 92%;
        bottom: 0;
        clip-path: polygon(0 0, 32% 0, 100% 100%, 0% 100%);
        background-color: ${props => props.theme.colors.secondary};
        min-width: 250px;
        z-index: -1;
    }

    .column {
        text-align: center;
        flex-basis: 175px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .column:not(:last-child) {
        border-right: 2px solid ${props => props.theme.colors.lighten(props.theme.colors.secondary, .25).string()};
    }
`

const FullSection = styled(Section).attrs({ className: 'is-medium' })`
    padding-top: calc(100vh * .05);
    padding-bottom: calc(100vh * .05);
    position: relative;
    min-height: calc(100vh - 125px);
    z-index: -1;

    ${props => props.backgroundColor && css`
        background-color: ${props.theme.colors[props.backgroundColor]};
    `}

    ${props => props.backgroundImage && css`
        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url(${props.backgroundImage});
            background-size: cover;
            ${props.backgroundPosition && css`
                background-position: ${props.backgroundPosition};
            `}
            ${props.backgroundWidth && css`
                width: ${props.backgroundWidth}; 
            `}

            ${props.mobile && props.theme.responsiveness.mobile(`
                content: none;
                width: inherit;
            `)}
        }

        ${props => props.backgroundOverlay && css`
            > div {
                z-index: 2;
                position: relative;
            }

            &:after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(0, 0, 0, .35);
                ${props.backgroundWidth && css`
                    width: ${props.backgroundWidth};
                `}

                ${props.mobile && props.theme.responsiveness.mobile(`
                    content: none;
                    width: inherit;
                `)}
            }
        `}
    `}
`

const HeroDarkOverlay = styled(Hero)`
    position: relative;
    z-index: -1;
    background-image: url(${bulb});
    background-size: cover;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        z-index: -1;
        background-color: rgba(0,0,0,0.5);
    }    
`

const HeroDarkOverlayFull = styled(HeroDarkOverlay)`
    min-height: calc(100vh - 125px);

    .hero-body {
        padding-top: calc(100vh * .2);
    }
`

const SubList = styled.ul.attrs({ className: 'has-top-gap-4' })`
    list-style: disc;

    > li:not(:first-child) {
        margin-top: 15px;
    }
`

const AboutPage = props => (
    <Layout location={props.location}>
        <HeroDarkOverlayFull  className="has-text-white-ter is-centered">
            <HeroBody>
                <Container>
                    <VerticalColumns className="has-text-centered">
                        <Column>
                            <Title className="is-size-1 has-text-white-ter">The right <TextColor color="primary">people</TextColor><br/> with the right passion</Title>
                        </Column>
                        <Column>
                            <hr style={{ width: '50%', backgroundColor: 'grey', margin: '0 auto' }}/>
                        </Column>
                        <Column style={{ marginTop: `55px` }}>
                            <p className="subtitle has-text-white-ter">Something about how awesome we are and why we're better than everyone else at what we do.</p>
                        </Column>
                        <Column style={{ marginTop: `55px` }}>
                            <Button dark>What can we do for you</Button>
                        </Column>
                    </VerticalColumns>
                </Container>
            </HeroBody>
        </HeroDarkOverlayFull>

        <FullSection>
            <Columns style={{ position: 'absolute', width: '100%', top: 30 }}>
                <Info>
                    <Columns>
                        <Column>
                            <span className="has-text-weight-bold">CAGE CODE</span><br/>
                            <span className="is-size-4 has-text-weight-light">86EL1</span>
                        </Column>
                        <Column>
                            <span className="has-text-weight-bold">DUNS NUMBER</span><br/>
                            <span className="is-size-4 has-text-weight-light">081241076</span>
                        </Column>
                        <Column>
                            <span className="has-text-weight-bold">CLASSIFICATION</span><br/>
                            <span className="is-size-4 has-text-weight-light">8(A)</span>
                        </Column>
                    </Columns>
                </Info>
            </Columns>
            <Container style={{ marginTop: 'calc(100vh * .15)' }}>
                <Columns isCentered>
                    <Column className="is-4">
                        <div className="title">Iconian</div>
                        <div className="phonetics is-size-5 has-text-grey-light">[ahy-<b>koh</b>-nee-uh n] | \ī-ˈkō-nē-ən\</div>
                        <div className="is-size-5">noun</div>
                        <ol style={{ marginTop: 15 }}>
                            <li>a person who is esteemed for exceptional talent and is eagerly sought after for his or her knowledge.</li>
                            <li>an employee of Icon Technologies.</li>
                        </ol>
                    </Column>
                    {/* <Column className="is-4-desktop is-hidden-mobile" style={{ position: 'relative' }}>
                        <img src={logo} style={{ transform: 'rotate(-90deg)', position: 'absolute', bottom: '24%', left: '15%', height: '220px' }}/>
                    </Column> */}
                    <Column className="is-6 is-offset-1">
                        <Title as="p" color="primary" className="is-size-2">Icon is a fullstack digital services company.</Title>
                        <p className="is-size-5 has-text-grey has-top-gap-3"><b>We're founded on the premise of helping people grow.</b> Helping someone can be such a small gesture, but it can have profound impacts. Think butterfly effect. That's important to us, here's how we help...</p>
                        
                        <NumberedList className="has-top-gap-4 helping">
                            <Emerge>
                                <li>
                                    <div className="list-content flex">
                                        <img style={{ height: 80, width: 'auto' }} src={people}/>
                                        <Subtitle as="span" color="secondary" className="flex-item is-size-3" style={{ marginBottom: 0 }}>The people who work for us</Subtitle>
                                        <SubList>
                                            <li>We foster a team based competitve culture, with constant positive creativity.</li>
                                            <li>Outstanding talent deserves outstanding compensation - We provide top tier benefits and we reward our team members for their accomplishments and contributions to the success of Icon.</li>
                                            <li>Transparency and trust go hand in hand. With talent like ours you don't cage the beast. We're open, we communicate often, we share ideas and celebrate diversity.</li>
                                        </SubList>
                                    </div>
                                </li>
                            </Emerge>
                            <Emerge>
                                <li>
                                    <div className="list-content flex">
                                        <img style={{ height: 80, width: 'auto' }} src={partners}/>
                                        <Subtitle as="span" color="secondary" className="flex-item is-size-3" style={{ marginBottom: 0 }}>The companies we partner with</Subtitle>
                                        <SubList>
                                            <li>We're passionate about providing the best solution possible - We look to partner with other prominent companies to augment our overall capabilities and provide the ultimate best outcome.</li>
                                            <li>We foster a culture of sharing and we want to see others grow. With over 30 years of public sector experience in the propsal review/award process we know how to write winning proposals, so it only makes sense that we help.</li>
                                        </SubList>
                                    </div>
                                </li>
                            </Emerge>
                            <Emerge>
                                <li>
                                    <div className="list-content flex">
                                        <img style={{ height: 80, width: 'auto' }} src={customers}/>
                                        <Subtitle as="span" color="secondary" className="flex-item is-size-3" style={{ marginBottom: 0 }}>The organizations that pay us</Subtitle>
                                        <SubList>
                                            <li>Transparency is one of our core values and having an open and honest relationship begins with it. We set upfront expectations. We communicate early and often. And when things change we quickly reset course and provide honest estimations.</li>
                                            <li>Continual improvement is key to ones evolution and we bring that mantra to our projects as well.</li>
                                            <li>Defining value can be hard. There's a fine balance between time, money and quality. We have over 45 years of combined IT experience so we know how to help our customers find value and then deliver it.</li>
                                        </SubList>
                                    </div>
                                    
                                </li>
                            </Emerge>
                        </NumberedList>
                    </Column>
                </Columns>
            </Container>
        </FullSection>

        <FullSection backgroundOverlay mobile backgroundImage={lincoln} backgroundPosition="50%" backgroundWidth="50%" backgroundColor="greyLighter">
            <Columns className="is-centered">
                <Column className="is-3 is-offset-1">
                    <Title as="h2" className="is-size-2 is-spaced has-bottom-gap-3" color="primary">Values</Title>
                    <Subtitle as="p" color="white" mobileColor="default">Our people are our greatest asset. We focus on retaining the highest quality talent, and as a result, deliver the highest quality solutions.</Subtitle>
                </Column>
                <Column className="is-5 is-offset-2">
                    <Columns className="is-centered is-multiline">
                        <Column className="is-6 is-12-touch">
                            <Title as="p" color="secondary">People First</Title>
                            <p>Our professionals are the backbone of our success, without them we cannot accomplish our mission. We value our employees' individual strengths, and their entrepreneurial and charitable spirit.</p>
                        </Column>
                        <Column className="is-6 is-12-touch">
                            <Title as="p" color="secondary">Transparency</Title>
                            <p>From our clients to our team members, transparency through our actions and communications is one of the keys to building trusting relationships.</p>
                        </Column>
                    </Columns>
                    <Columns className="has-top-gap-3 mobile--no-gap">
                        <Column className="is-6 is-12-touch">
                            <Title as="p" color="secondary">Integrity</Title>
                            <p>Our team values honesty, respect, and teamwork. We believe integrity is doing the right thing; even when no one is looking.</p>
                        </Column>
                        <Column className="is-6 is-12-touch">
                            <Title as="p" color="secondary">Passion</Title>
                            <p>We're passionate enthusiast, that come to work to play, and our work shows it. Do what you love, and love what you do.</p>
                        </Column>                    
                    </Columns>
                </Column>
            </Columns>
        </FullSection>

        <Section className="is-medium">
            <Container>
                <Columns className="is-centered is-multiline">
                    <Column className="is-8 has-text-centered">
                        <Title as="p" className="is-size-1 is-spaced" color="primary">Want to learn if we can help you?</Title>
                    </Column>
                </Columns>
                <div className="has-text-centered has-top-gap-1">
                    <Button light>Get in touch</Button>
                </div>
                {/* <Columns className="is-centered has-top-gap-2">
                    <Column className="is-2">
                        <Button light>Get in touch</Button>
                    </Column>
                </Columns>                 */}
            </Container>

        </Section>
    </Layout>
)

export default AboutPage
