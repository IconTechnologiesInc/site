import React from 'react'
import styled from 'styled-components'
import { Image } from 'bloomer'
import { Text } from '../Text'
import { DateText } from './index'

export default styled(props => (
    <div className={props.className}>
        <Image src={props.logo} className="is-48x48"/>
        <div className="education__info">
            <Text as="p">{props.school}</Text>
            <div className="education__info__degree">
                <Text color="grey">{props.degree}</Text>
                <DateText dateColor="primary" color="grey">{props.date}</DateText>
            </div>
        </div>
    </div>
))`
    display: flex;
    align-items: center;

    .image {
        margin-right: 10px;
    }

    .education__info {
        width: 80%;
    }

    .education__info__degree {
        display: flex;

        ${Text} {
            margin-right: auto;
        }

        ${DateText} {
            flex-shrink: 0;
        }
    }
`