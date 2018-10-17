import React from 'react'
import styled from 'styled-components'
import { Container, Columns, Column, Hero, HeroBody, HeroFooter, Icon, Section } from 'bloomer'
import { Subtitle, TextColor, Title } from '../components/Text'
import Scrolldown from '../components/Scrolldown'
import Layout from '../layouts'
import InfoCallout from '../components/InfoCallout'
import VerticalColumns from '../components/VerticalColumns'

// images
import butterflies from '../images/butterflies.jpeg'
import coding from '../images/007-binary-code.svg'
import project from '../images/003-goal.svg'
import coaching from '../images/005-resource.svg'
import analysis from '../images/004-jigsaw.svg'
import ux from '../images/008-web-design.svg'
import systems from '../images/001-structure.svg'
import cloud from '../images/006-cloud-computing-2.svg'
import devsecops from '../images/002-algorithm.svg'
import dcSkyline from '../images/dc_skyline-nobg.png'
import phone from '../images/009-call.svg'
import email from '../images/010-paper-plane.svg'

const DCSklyineSection = styled(Section).attrs({ className: 'is-medium' })`
    min-height: 60vh;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(transparent, hsla(190.6, 100%, 10%, .2));
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(${dcSkyline});
        background-size: contain;
        background-position: bottom;
        opacity: .1;
    }
`

const InfoCalloutStyled = styled(InfoCallout)`
    .column {
        height: calc(100vh * .17);

        p {
            margin-top: 15px;
        }
    }
`

const MainHero = styled(Hero)`
    background-image: url(${butterflies});
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh * .96);
    padding-top: calc(100vh * .15);
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(141deg, hsl(198.1, 67.1%, 32%) 0%, #48AFDB 71%, #94D0EA 100%);
        opacity: 0.3;
    }

    h1 {
        text-shadow: 1px 1px 4px hsla(0, 0%, 0%, .5);
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: -5px;
            right: 0;
            left: 7px;
            height: 2px;
            width: 283px;
            background-color: ${props => props.theme.colors.white};
            box-shadow: 1px 1px 4px hsla(0,0%,0%,0.5);
            z-index: 1;
        }
    }

    h2 {
        text-shadow: 1px 1px 4px hsla(0, 0%, 0%, .5);
    }
`

const IndexPage = props => (
    <Layout location={props.location}> 
        <MainHero>
            <HeroBody>
                <Container>
                    <Columns>
                        <Column className="is-8">
                            <Title className="is-size-1 is-spaced" color="secondary">Evolve.</Title>
                            <Subtitle className="is-size-2" color="white">Adaptive full stack digitial services to help <TextColor color="secondary" className="has-text-weight-bold">your</TextColor> ogranization transform.</Subtitle>
                        </Column>
                    </Columns>
                </Container>
            </HeroBody>
            <HeroFooter>
                <Scrolldown scrollTo="#about"></Scrolldown>
            </HeroFooter>
        </MainHero>

        <Section id="about" className="is-medium">
            <Columns>
                {/* Capabilities  */}
                <InfoCalloutStyled className="column is-5 has-text-centered" color="greyLighter" style={{ marginTop: '-8.2rem', marginLeft: '-0.8rem' }}>
                    <Columns className="is-multiline">
                        <Column className="is-6">
                            <img src={coaching} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">Agile Coaching</p>
                        </Column>
                        <Column className="is-6">
                            <img src={project} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">Agile Project Management</p>
                        </Column>
                        <Column className="is-6">
                            <img src={analysis} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">Domain/Business Analysis</p>
                        </Column>
                        <Column className="is-6">
                            <img src={ux} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">UI/UX Design</p>
                        </Column>
                        <Column className="is-6">
                            <img src={coding} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">Full Stack Application Development</p>
                        </Column>
                        <Column className="is-6">
                            <img src={systems} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">Systems Architecture and Design</p>
                        </Column>
                        <Column className="is-6">
                            <img src={devsecops} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">DevSecOps</p>
                        </Column>
                        <Column className="is-6">
                            <img src={cloud} style={{ height: 60, width: 'auto' }}/>
                            <p className="is-size-6">Cloud First Solutions</p>
                        </Column>
                    </Columns>
                </InfoCalloutStyled>
                
                {/* About us */}
                <Column className="is-5 is-offset-1 has-text-grey">
                    <Subtitle color="primary" className="is-size-2 has-text-weight-bold" style={{ margin: '80px auto', marginTop: 'inherit' }}>Holistic Digital Services.</Subtitle>
                    <p className="is-size-5">Icon is a small, minority-owned company. We specialize in delivering full stack IT solutions &amp; services in the face of evolving ecosystems. We can help solve your complex organizational problems through enterprise analysis, systems &amp; software design and implementation, agile project management &amp; coaching, and cloud first solutions.</p>
                    <Subtitle color="primary" className="is-size-2 has-text-weight-bold" style={{ margin: '80px auto' }}>The right people with the right passion.</Subtitle>
                    <p className="is-size-5">Guided by passion, transparency and integrity, we deliver you the right solution with the right professional talent. Icon’s industry leading experts leverage proven agile principles to deliver measurable results. We set upfront expectations. We communicate early and often. And when things change, we learn quickly and pivot properly, to continue to deliver purposeful value to your organization.</p>
                </Column>
            </Columns>
        </Section>

        {/* Contact us */}
        <DCSklyineSection>
            <Columns>
                <Column className="is-offset-2 is-4">
                    <Subtitle as="p" className="is-size-2 has-text-weight-bold" color="secondary">Let's learn more about each other.</Subtitle>
                </Column>
                <Column className="is-offset-1 is-4">
                    <VerticalColumns>
                        <Column>
                            <Columns>
                                <Column className="is-2">
                                    <img src={phone} alt="phone" style={{ height: 60, width: 'auto' }}/>
                                </Column>
                                <Column className="is-size-3">
                                    <TextColor as="p" color="grey">443.742.1509</TextColor>
                                </Column>
                            </Columns>
                        </Column>
                        <Column>
                            <Columns>
                                <Column className="is-2">
                                    <img src={email} alt="email" style={{ height: 60, width: 'auto' }}/>
                                </Column>
                                <Column className="is-size-3">
                                    <TextColor as="p" color="grey">info@icontech.io</TextColor>
                                </Column>
                            </Columns>                        
                        </Column>
                    </VerticalColumns>
                </Column>
            </Columns>
        </DCSklyineSection>
    </Layout>
)

export default IndexPage
