import React from 'react'
import { Columns, Column, Hero, HeroBody, Image, Section } from 'bloomer'
import Button from '../components/Button'
import { Subtitle, Text, Title } from '../components/Text'
import NumberedList from '../components/NumberedList'
import VerticalColumns from '../components/VerticalColumns'
import InfoCallout from '../components/InfoCallout'
import Social from '../components/Social'
import Layout from '../layouts'
import styled, { css } from 'styled-components'
import { Emerge } from 'react-emergence'
import  TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

// images
import phone from '../images/009-call-dark.svg'
import email from '../images/010-paper-plane-dark.svg'

const InfoCalloutColumnStyled = styled(InfoCallout).attrs({ className: 'column is-5' })`${({ theme }) => css`
    &&& {
        margin-top: -2.5rem;
    }
`}`

const InfoColumnStyled = styled(Column)`
    &&& {
        display: flex;
        align-items: center;

        .image {
            margin-right: 15px;
        }
    }
`

const SocialStyled = styled(Social)`${({ theme }) => css`
    &&& {
        > li a {
            font-size: ${theme.fonts.size.large};
            color: ${theme.colors.grey}
        }
    } 
`}`

const ContactColumnStyled = styled(Column)`
    &&& {
        display: flex;
        flex-basis: auto;
        margin-bottom: 15px;

        figure {
            margin-right: 30px;
        }
    }
`

class ContactForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const target = event.target;
        this.setState({ [target.id]: target.value });
    }

    render() {
        return (
            <div>
                <TextField
                    required
                    id="firstName"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    margin="normal"
                />
                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    margin="normal"
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                    margin="normal"
                />
                <TextField
                    id="phone"
                    label="Phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    margin="normal"
                />
                <TextField
                    id="company"
                    label="Company"
                    value={this.state.company}
                    onChange={this.onChange}
                    margin="normal"
                />
                <TextField
                    multiline
                    rowsMax="5"
                    id="message"
                    label="Message"
                    value={this.state.mesasge}
                    onChange={this.onChange}
                    margin="normal"
                />
            </div>
        )
    }
}

// Contacd


const AboutPage = props => (
    <Layout location={props.location}>
        <Section className="is-medium">
            <Columns>
                <InfoCalloutColumnStyled className="is-5" color="greyLighter">
                    <Title as="h1" size="larger">How can we help you?</Title>
                    <p>Have ideas for how we could work together, or just want to chat to find out more? We'd love to hear from you.</p>

                    <Columns className="is-multiline" style={{ marginTop: 25 }}>
                        <InfoColumnStyled className="is-12">
                            <Image src={phone} alt="phone" className="is-24x24"/>
                            <Text color="grey" size="small">443.742.1509</Text>
                        </InfoColumnStyled>
                        <InfoColumnStyled className="is-12">
                            <Image src={email} alt="email" className="is-24x24"/>
                            <Text as="p" color="grey" size="small">info@icontech.io</Text>
                        </InfoColumnStyled>
                        <InfoColumnStyled className="is-3"><SocialStyled/></InfoColumnStyled>
                    </Columns>
                </InfoCalloutColumnStyled>
                <Column className="is-7">
                    <ContactForm/>
                </Column>
            </Columns>
        </Section>

        
    </Layout>
)

export default AboutPage
