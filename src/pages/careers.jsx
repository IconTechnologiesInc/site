import React from 'react'
import { Columns, Column, Container, Hero, HeroBody, Icon, Section, Title } from 'bloomer'
import styled from 'styled-components'
import { Emerge } from 'react-emergence'
import { CardX, CardXContent, CardXHeader, CardXItem } from '../components/CardX'
import Layout from '../layouts'
import careersBanner from '../images/careers.jpeg'
import Button from '../components/Button'

const Background = styled.div`
    background: linear-gradient(180deg, transparent, rgba(73, 175, 219, 1) 100%), url(${careersBanner});
    background-size: cover;
    background-position: 50% 41%;
`

const CareersPage = props => (
    <Layout location={props.location}>
        <Hero hasTextAlign="centered">
            <HeroBody>
                <Container>
                    <Title className="is-size-2">We're always looking for fresh talent</Title>
                </Container>
            </HeroBody>
        </Hero>

        <Section isSize="medium" style={{ paddingTop: 0, paddingRight: 0, paddingLeft: 0 }}>
            <Background>
                <Columns className="is-size-5">
                    <Column className="is-6 is-offset-6" style={{ padding: '9%', backgroundColor: 'hsla(0, 0%, 100%, .8)' }}>
                        <p><b>Transparency, trust and respect are the pillars of Icon's culture</b>. Our reputation and the value we deliver to our customers is owed to the people of Icon. We are passionate enthusiasts that love what we do. We lead by example, and we focus on quality, not just at work but life as well.</p>
                        <p>Icon attracts industry leading, experienced talent by offering a top tier compensation package, complete with bonuses, training &amp; tech refresh budgets, various stipends, team-building events and company retreats, 401k contribution and of course excellent health, dental and vision.</p>
                    </Column>
                </Columns>
            </Background>
        </Section>

        <Section>
            <Container>
                <Columns isCentered={true} className="has-bottom-gap-1">
                    <Column isCentered={true} className="is-3 is-size-3 has-text-centered">
                        <h2>Our Benefits</h2>
                    </Column>
                </Columns>

                <Columns className="benefits is-centered is-multiline has-bottom-gap-2">
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX className="is-center">
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-leanpub fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Training</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>We encourage and support you by offering annual training budgets. Want to become a certified Scrum Master, get a membership to Pluralsight, or take a guerrilla .NET course? Do it, it's your choice!</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX className="is-center">
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-refresh fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Tech Refresh</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>We're geeks at heart! Everyone gets a yearly budget of $750 for any tech or gadgets they need in their life.</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge> 
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX className="is-center">
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-gift fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Bonuses</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>Performance bonuses are rewarded annually up to 10% of your salary. Employee referral bonuses of $5k and business development revenue bonuses are additionally awarded.</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX className="is-center">
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-heartbeat fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Medical</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>We cover 100% of the employee-only premium for HMO medical / PPO HSA, Prescription Drug, Dental, Vision, Life, Short-Term Disability, and Long-Term Disability coverage. We also offer the option for dependent coverage on all the group plans.</p>
                                </CardXContent>
                            </CardX>
                        </Column>    
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX className="is-center">
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-train fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Commuter Stipend</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>We can't always live 5 minutes from work. We offer $100 a month in commuter stipend when you choose to travel to and from work via mass transit. We help your pocket and the environment. Win!</p>
                                </CardXContent>
                            </CardX>
                        </Column>   
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX className="is-center">
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-line-chart fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">401k</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>We match up to 6% of your gross salary in a Vangaurd retirement plan.</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX>
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-sun-o fa-3x is-large"></Icon>
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Paid Leave</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>Time off is nice, and getting paid for it is better! We give 4 weeks of paid time off, as well as Federal holidays and birthdays.</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX>
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-map-marker fa-3x is-large"></Icon>        
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Team Events</span>
                                    </CardXItem>  
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>We have quarterly team-building events, regular happy hour get together's, and even an annual backpacking trip.</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge>
                    <Emerge>
                        <Column className="is-4 slide-up">
                            <CardX>
                                <CardXHeader isCentered={true} direction="column">
                                    <CardXItem>
                                        <Icon className="fa fa-universal-access fa-3x is-large"></Icon>
                                    </CardXItem>
                                    <CardXItem>
                                        <span className="is-size-4">Gym Stipend</span>
                                    </CardXItem>
                                </CardXHeader>
                                <CardXContent size="large">
                                    <p>Work-life balance is important, so If the gym is your thing, we'll cover your gym membership up to $30 every month.</p>
                                </CardXContent>
                            </CardX>
                        </Column>
                    </Emerge>
                </Columns>
            </Container>
        </Section>
    
        <Emerge>
            <Section className="slide-up">
                <Container className="glow">
                    <Columns style={{ alignItems: 'stretch' }}>
                        <Column className="is-8 full-bg is-branded is-large">
                            <span className="is-size-2 has-text-white">Think we might be a good fit?</span>
                            <p className="has-text-light has-top-gap-4">We're always in the market for fresh and exciting talent. If you apply for a position and we like what we see, we'll ask you to start our multi-process interview. In addition to our technical and business interviews we also take time to talk about our unique culture to make sure you'll be part of team with values and opportunities that align with your own goals.</p>
                        </Column>
                        <Column 
                            className="has-text-centered beb beb-grey-lighter" 
                            style={{ 
                                paddingBottom: 25, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}
                        >
                            <Button primary className="line-effect">JOIN THE TEAM</Button>
                        </Column>
                    </Columns>
                </Container>
            </Section>
        </Emerge>
    </Layout>
)

export default CareersPage
