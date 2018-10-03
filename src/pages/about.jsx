import React from 'react'
import { Container, Columns, Column, Hero, HeroBody, Image, Section } from 'bloomer'
import Layout from '../layouts'
import basisPathLogo from '../images/basispath_bw.jpg'
import lockeedLogo from '../images/lm.png'
import pivotalLogo from '../images/pivotal_bw.png'
import cseLogo from '../images/cse_bw.png'
import nextrevLog from '../images/nextrev_bw.png'

const AboutPage = props => (
    <Layout location={props.location}>
        <Hero hasTextAlign="centered" isSize="medium">
            <HeroBody>
                <Columns>
                    <Column>
                        <h1 className="is-size-1">The right people with the right passion</h1>
                    </Column>
                    <Column>
                        <Columns className="has-text-centered">
                            <Column className="">
                                <span className="has-text-weight-bold">CAGE CODE</span><br/>
                                <span className="is-size-5">887YR6</span>
                            </Column>
                            <Column>
                                <span className="has-text-weight-bold">DUNS NUMBER</span><br/>
                                <span className="is-size-5">081241076</span>
                            </Column>
                            <Column>
                                <span className="has-text-weight-bold">CLASSIFICATION</span><br/>
                                <span className="is-size-5">8(A)</span>
                            </Column>
                        </Columns>
                    </Column>
                </Columns>
            </HeroBody>
        </Hero>

        <div className="is-hidden-mobile has-bottom-gap-1"></div>

        <Container>
            <Section>
                <Columns className="is-centered">
                    <Column className="is-4">
                        <h2>OUR STORY</h2>
                        <hr/>
                        
                    </Column>
                    <Column className="is-4 is-offset-1">
                        <h2>VISION</h2>
                        <hr/>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </Column>
                </Columns>
            </Section>

            <Section>
                <Columns className="is-centered">
                    <Column className="is-9 has-text-centered">
                        <h2>PARTNERS</h2>
                        <hr/>
                        <Columns className="is-multiline">
                            <Column className="is-3">
                                <Image  src={basisPathLogo}/>
                            </Column>
                            <Column className="is-3">
                                <Image src={lockeedLogo}/>
                            </Column>
                            <Column className="is-3">
                                <Image src={pivotalLogo}/>
                            </Column>
                            <Column className="is-3">
                                <Image src={cseLogo}/>
                            </Column>
                            <Column className="is-3">
                                <Image src={nextrevLog}/>
                            </Column>
                        </Columns>
                    </Column>
                </Columns>
            </Section>
        </Container>
    </Layout>
)

export default AboutPage
