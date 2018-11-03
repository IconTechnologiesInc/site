import styled, { css } from 'styled-components'

const BaseText = styled.span`${props => css`
    &&&{
        font-size: ${props.size ? props.theme.fonts.size[props.size] : 'inherit'};
        color: ${props.theme.colors[props.color]} !important;
        font-weight: ${props.bold ? 'bold' : 'normal'};
    }
`}`

BaseText.defaultProps = {
    color: 'default',
    bold: false
}

export let Text = BaseText;

export let Title = styled(BaseText).attrs({ className: 'title' })`
    &&& {
        font-weight: bold;
    }
`

Title.defaultProps = {
    color: 'primary',
    size: 'large'
}

export let Subtitle = styled(BaseText).attrs({ className: 'subtitle' })`
    ${props => css`
        &&& {
            ${props.mobileColor && props.theme.responsiveness.mobile(`
                color: ${props.theme.colors[props.mobileColor]};
            `)}
        }
    `}
`