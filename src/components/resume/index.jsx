import React from 'react'
import styled from 'styled-components'
import { Icon } from 'bloomer'
import { Text } from '../Text'

export const IconStyled = styled(Icon)`
    color: ${props => props.theme.colors[props.color]};
    margin-right: 10px;
`

IconStyled.defaultProps = {
    color: 'primary'
}

export let DateText = styled(props => (
    <div className={props.className}>
        <IconStyled className="far fa-calendar-alt" color={props.dateColor} style={{ marginRight: 3 }}/>
        <Text color={props.color}>{props.children}</Text>
    </div>
))``

DateText.defaultProps = {
    color: 'default',
    dateColor: 'grey'
}

export const Location = props => (
    <div className={props.className}>
        <IconStyled className="fas fa-map-marker-alt" color="grey" style={{ marginRight: 3 }}/>
        <Text>{props.children}</Text>
    </div>
)