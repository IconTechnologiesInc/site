import React from 'react'
import { Hero, HeroBody  } from 'bloomer'
import Layout from '../layouts'

const IndexPage = props => (
    <Layout location={props.location}> 
        <Hero className="is-medium is-bold is-primary" hasTextAlign="centered">
            <HeroBody>
                <p className="title is-1">The right team<br/> can make or break your project.</p>
                <p className="title is-4">We bring the right people with the right passion</p>
            </HeroBody>
        </Hero>
    </Layout>
)

export default IndexPage
