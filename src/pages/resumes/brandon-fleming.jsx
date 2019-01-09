import React from 'react'
import styled from 'styled-components'
import { Columns, Column, Container, Content, Hero, HeroBody, Icon, Section } from 'bloomer'
import { Text, Title } from '../../components/Text'
import Image from '../../components/Image'
import { Skills, Skill } from '../../components/resume/Skills'
import { Experience, Position } from '../../components/resume/Experience'
import { IconStyled } from '../../components/resume'
import Education from '../../components/resume/Education'
import Project from '../../components/resume/Project'
import Layout from '../../layouts'

import umbcLogo from '../../images/umbc.png'
import portrait from '../../images/portrait-bf.png'

const ImageStyled = styled(Image)`
    &&& {
        img {
            height: 200px;
            width: auto;   
        }
    }
`

const SectionStyled = styled(Section)`
    &&& {
        @media print {
            padding: 10pt 0 10pt 3pt;
            font-size: 10pt;
            -webkit-print-color-adjust: exact;

            h1 {
                font-size: 35pt;
            }
            
            .large-column {
                width: 60%
            }

            .small-column {
                margin-left: 5%;
            }
        }
    }
`

const HrStyled = styled.hr`
    @media print {
        margin: 5pt 0;
    }
`

const ContactColumnsStyled = styled(Columns).attrs({ className: 'is-multline' })`
    .column {
        padding-bottom: 0;
        @media print {
            padding-top: 0;
        }
    }
`

const SectionTitle = styled(props => (
    <Title as="h2" size="larger" color="grey" className={props.className}>{props.children}</Title>
))`
    &&&{
        border-bottom: 2px solid ${({ theme }) => theme.colors.greyLight};
        margin-bottom: 1rem;

        @media print {
            font-size: 24pt;
        }
    }
`

const Subsection = styled.div`
    margin-bottom: 30px;
`

const List = styled.ul``

const ListItem = styled(props => (
    <div className={props.className}>
        <Icon className="fas fa-check-circle"/>
        {props.children}
    </div>
))`
    display: flex;
    margin-bottom: 15px;
    align-items: center;

    .icon {
        color: ${({ theme }) => theme.colors.greyLight};
        font-size: 2rem;
        margin-right: 20px;
    }

    @media print {
        margin-bottom: 5pt;
    }
`

export default props => (
    <Layout location={props.location}>
        <Hero className="no-print">
            <HeroBody>
                <Container className="has-text-centered">
                    <Title as="h1" size="largest">Resumes</Title>
                </Container>
            </HeroBody>
        </Hero>

        <Container>
            <SectionStyled className="is-small">
                <Columns style={{ alignItems: 'center' }}>
                    <Column className="is-8">
                        <Title as="h1" color="grey" size="largest">Brandon Fleming</Title>
                        <ContactColumnsStyled className="is-multiline">
                            <Column className="is-half">
                                <IconStyled className="fas fa-phone"/>
                                <Text>443.253.3829</Text>
                            </Column>
                            <Column className="is-half">
                                <IconStyled className="fab fa-linkedin"/>
                                <Text>linkedin.com/in/brandfleming</Text>
                            </Column>
                            <Column className="is-half">
                                <IconStyled className="fas fa-at"/>
                                <Text>brand.fleming@gmail.com</Text>
                            </Column>
                            <Column className="is-half">
                                <IconStyled className="fas fa-map-marker-alt"/>
                                <Text>Gambrills, MD</Text>
                            </Column>
                        </ContactColumnsStyled>
                    </Column>
                    <Column>
                        <ImageStyled isRounded className="is-pulled-right" src={portrait}></ImageStyled>
                    </Column>
                </Columns>
            </SectionStyled>

            <HrStyled/>

            <SectionStyled style={{ paddingTop: 20 }}>
                <Columns>
                    <Column className="large-column is-8">
                        <Subsection>
                            <List style={{ marginBottom: 20 }}>
                                <ListItem>14 years experience in full-stack application design and development using n-tierd architecture to produce performant, maintainable applications and RESTful services.</ListItem>
                                <ListItem>6 years experience mentoring and coaching through paired programming, code reviews, and lectures.</ListItem>
                                <ListItem>7 years experience working in and implementing agile methodologies like scrum, kanban, lean and SAFe. Various roles: scrum master, product owner, developer, analyst.</ListItem>
                                <ListItem>3 years experience in product development, working with Product Manager and Stakeholders, defining, writing and prioritizing future release features.</ListItem>
                            </List>
                        </Subsection>
                        <Subsection>
                            <SectionTitle>Experience</SectionTitle>
                            <Experience company="Northrop Grumman">
                                <Position 
                                    title="Senior Software Engineer" 
                                    location="Columbia, MD" 
                                    from="11/2018 - current"
                                    skills={['Docker', 'Git', 'JavaScript', 'Jenkins', 'LESS', 'Linux', 'Make', 'NiFi', 'Node.js', 'React', 'Shell Script']}
                                >
                                    <p>Developed next generation of NSA RTRG, using metadata from multiple data sources to allow tactical users to rapidly identify adversaries and IEDs in billions of lines of data.</p>
                                    <Content>
                                        <ul>
                                            <li>Developed bulk screening triage tool to process, query, rank and reclassify metadata, resulting in information that is shared or written into a formal reports for dissemination.</li>
                                            <li>Developed portable, light-weight version of screening application, capable of being deployed to portable systems.</li>
                                        </ul>
                                    </Content>
                                </Position>
                            </Experience>
                            <Experience company="Lockwood Software Engineering">
                                <Position 
                                    title="Lead Software Engineer" 
                                    location="Gaithersburg, MD" 
                                    from="10/2015 - 11/2018"
                                    skills={['Backbone', 'ElasticSearch', 'Express', 'Git', 'Grunt', 'JavaScript', 'Jenkins', 'LESS', 'Node.js', 'React', 'Swagger', 'TypeScript']}
                                >
                                    <p>Lead engineer working with Lockheed Martin and Leidos, building and integrating geospatial analysis and intelligence applications through SAFe agile methodologies.</p>
                                    <Content>
                                        <ul>
                                            <li>Led design and development of application and RESTful web services to provide intelligence community the ability to observe, relate and share mission critical GEOINT in real-time.</li>
                                            <li>Built and led a development team, providing mentorship and guidance on JavaScript application development, OO design principles, Functional programming, Node.js, and the integration of third party vendor API's and applications.</li>
                                            <li>Improved geospatial and temporal searches by over 1000% by using ElasticSearch as a middle-layer between app and 3rd party data store.</li>
                                            <li>Served as surrogate Product Owner, managing release priorities and goals for the product team, designed and wrote epics and features for future product increments.</li>
                                            <li>Scrum Master, facilitating the successful delivery of sprint commitments.</li>
                                        </ul>
                                    </Content>
                                </Position>
                            </Experience>
                            <Experience company="Connections Education">
                                <Position 
                                    title="Senior Software Engineer" 
                                    location="Columbia, MD" 
                                    from="07/2015 - 10/2015"
                                    skills={['AngularJS', 'ASP.NET MVC', 'ASP.NET Web API', 'C# ASP.NET', 'ElasticSearch', 'HTML', 'Knockout', 'JavaScript', 'LESS', 'ScaleOut', 'SQL Server', 'TFS', 'Web Workers']}
                                >
                                    <p>Developed and maintained a large scale .NET Learning Management application.</p>
                                    <Content>
                                        <ul>
                                            <li>Rebuilt and improved entire school enrollment process resulting in 26% growth in student enrollment within the first year of release.</li>
                                            <li>Created a simple, light weight implicit dependency injection and object creation JavaScript library.</li>
                                            <li>Worked cross-functionally to maintain existing features and add new ones to the Learning Management System.</li>
                                            <li>Mentor and develop Jr. Engineers through code reviews and peer programming.</li>
                                            <li>Participated in quarterly hack-a-thon competitions.</li>
                                        </ul>
                                    </Content>
                                </Position>

                                <Position 
                                    title="Software Engineer II" 
                                    location="Columbia, MD" 
                                    from="06/2013 - 07/2015"
                                    skills={['...']}
                                >
                                    <p>Same team - developing and maintaining a large scale .NET Learning Management application.</p>
                                </Position>

                                <Position 
                                    title="Software Engineer I" 
                                    location="Columbia, MD" 
                                    from="04/2012 - 06/2013"
                                    skills={['...', 'Sitefinity CMS']}
                                >
                                    <p>.NET Web developer on the Public Website team supporting maintenance and development of all public facing sites</p>
                                </Position>
                            </Experience>
                            <Experience company="Allegis Group">
                                <Position 
                                    title="Web Developer" 
                                    location="Hanover, MD" 
                                    from="10/2010 - 04/2012"
                                    skills={['ASP.NET MVC', 'ASP.NET Web API', 'C# ASP.NET', 'CSS', 'HTML', 'JavaScript', 'Omniture', 'SEO', 'SQL Server', 'TFS']}
                                >
                                    <p>Full stack .NET web development for external client facing websites.</p>
                                    <Content>
                                        <ul>
                                            <li>Offered position with no understanding of web development - within 6 months, tasked to a team of two to completely redesign client website.</li>
                                            <li>Within one year, offered responsibility of Lead Omniture Developer to improve web analytics and share knowledge with other developers.</li>
                                        </ul>
                                    </Content>
                                </Position>
                                
                                <Position 
                                    title="SQL/BI Developer" 
                                    location="Hanover, MD" 
                                    from="03/2008 - 10/2010"
                                    skills={['Actuate', 'ADO', 'Informatica', 'Oracle', 'Shell Script', 'SQL Management Studio', 'SQL Server', 'SSAS', 'SSIS', 'SSRS', 'VBA', 'VBScript', 'Visual Source Safe', 'WebFOCUS']}
                                >
                                    <p>Member of the Data Warehouse team and BI Developer.</p>
                                    <Content>
                                        <ul>
                                            <li>Responsible for requirements gathering and analysis, documentation and design/maintenance of database objects including schema design, CRUD, stored procedures and triggers, user defined functions, views, etc.</li>
                                            <li>Installed, implemented and created WebFOCUS proof of concept, and taught other team members how develop and maintain reports.</li>
                                            <li>Developed and maintained WebFOCUS BI modules, dashboards and reports for clients.</li>
                                        </ul>
                                    </Content>
                                </Position>

                                <Position 
                                    title="Financial Analyst/Developer" 
                                    location="Hanover, MD" 
                                    from="03/2006 - 03/2008"
                                    skills={['Access', 'ADO', 'Excel', 'Oracle', 'SQL Server', 'VBA']}
                                >
                                    <Content>
                                        <ul>
                                            <li>Design and develop financial profitability reports, dashboards, and client/server applications to support the National Sales Program for TEKsystems.</li>
                                            <li>Reduced overall aging for National Sales Program by 10% in one year by developing Accounts Receivable Tool (ART) that gave leadership more in depth insight into respective agings.</li>
                                            <li>Ad hoc financial reporting, forecasting and applications development.</li>
                                        </ul>
                                    </Content>
                                </Position>
                            </Experience>

                            <Experience company="RGII Technologies">
                                <Position 
                                    title="Financial Analyst" 
                                    location="Annapolis, MD" 
                                    from="12/2004 - 03/2006"
                                    skills={['Access', 'ADO', 'Excel', 'Oracle', 'SQL Server', 'VBA']}
                                >
                                    <Content>
                                        <ul>
                                            <li>Wrote cost proposals for government solitaction responses.</li>
                                            <li>Built and managed cost analysis/forecasting tool to help Business Development produce more profitable and competitive labor rates.</li>
                                            <li>Developed application to manage current strategic partnerships and offer insights on possible future partnerships.</li>
                                        </ul>
                                    </Content>
                                </Position>

                            </Experience>
                        </Subsection>
                    </Column>
                    <Column className="small-column is-offset-1">
                        <Subsection>
                            <SectionTitle>Skills</SectionTitle>
                            <Skills>
                                <Skill level={5}>JavaScript</Skill>
                                <Skill level={4}>Node.js</Skill>
                                <Skill level={3}>TypeScript</Skill>
                                <Skill level={3}>React</Skill>
                                <Skill level={4}>UI/UX</Skill>
                                <Skill level={4}>Design Principles</Skill>
                                <Skill level={4}>RESTful Services</Skill>
                                <Skill level={3}>GIT</Skill>
                                <Skill level={3}>C#</Skill>
                                <Skill level={3}>ASP.NET</Skill>
                            </Skills>
                            <Text as="p" color="greyLight">Other: Backbone, AngularJS, Kharma, Jasmine, Grunt, Rollup, Webpack, GatsbyJS, npm, Jenkins, Entity Framework 5/6, ASP.NET Web API, LINQ, SQL, TFS, Omniture</Text>
                        </Subsection>

                        <Subsection>
                            <SectionTitle>Projects</SectionTitle>
                            <Project 
                                name="object-translation" 
                                url="npmjs.com/package/object-translation" 
                                description="An ES6 node module to translate a source object into a target object. This library was developed primarily to handling converting data from a database into readable DTOs for a client."
                            />
                            <Project 
                                name="qry" 
                                url="github.com/bflemi3/candi" 
                                description="A simple implicit dependency injection and object creation library."
                            />
                            <Project 
                                name="knife" 
                                url="github.com/bflemi3/knife" 
                                description="A proof of concept to learn how AOP could implemented in JavaScript."
                            />
                            <Project 
                                name="ring" 
                                url="github.com/bflemi3/ring"
                                description="A very basic Promise implementation. I created this library to better learn and understand how promises work."
                            />
                            <Project 
                                name="radio"
                                url="github.com/bflemi3/radio"
                                description="An abstraction of window.postMessage, used for communicating between two or more windows. I created this as a proof of concept for a problem we were trying to solve at Lockwood Software Engineering."
                            />
                        </Subsection>
                            <SectionTitle>Education</SectionTitle>
                        <Subsection>
                            <Education school="U. of MD, Baltmiore County" logo={umbcLogo} degree="B.S. Finance Economics" date="12/04"/>
                        </Subsection>
                    </Column>
                </Columns>
            </SectionStyled>
        </Container>
    </Layout>
)