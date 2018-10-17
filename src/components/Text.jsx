import styled, { css } from 'styled-components'
import { Subtitle as BloomerSubTitle, Title as BloomerTitle } from 'bloomer'

export let TextColor = styled.span`
    color: ${props => props.theme.colors[props.color]};
`

TextColor.defaultProps = {
    color: 'default'
}

export let Title = styled(BloomerTitle).attrs({ className: 'title' })`
    &&& {
        color: ${props => props.theme.colors[props.color]} !important;
        font-weight: bold;
    }
`

Title.defaultProps = {
    color: 'default'
}

export let Subtitle = styled(BloomerSubTitle).attrs({ className: 'subtitle' })`
    ${props => css`
        &&& {
            color: ${props.theme.colors[props.color]};

            ${props.mobileColor && props.theme.responsiveness.mobile(`
                color: ${props.theme.colors[props.mobileColor]};
            `)}
        }
    `}
`

Subtitle.defaultProps = {
    color: 'default'
}