import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Button as BloomerButton } from 'bloomer'

const Button = styled(BloomerButton).attrs({ className: 'is-medium' })`
    transition: background-color 0.4s ease 0s, color 0.4s ease 0s, border-color 0.4s ease 0s;
    border-width: 2px;
    padding: 0.6em 1.25em;
    height: inherit;
    position: relative;
    padding-right: 75px;

    &:after {
        content: "⇢";
        font-size: 140%;
        position: absolute;
        top: 4px;
        right: 20px;
    }

    ${props => props.primary && css`
        color: ${props.theme.primary};

        &:hover, &.is-hovered {
            background-color: ${props.theme.primary};
            border-color: transparent;
            color: white;
        }
    `};
`

Button.propTypes = {
    primary: PropTypes.bool
}

export default Button;