import PropTypes from 'prop-types'
import styled from 'styled-components'

const leftRightPadding = '2rem'
const contentPadding = { small: `1rem ${leftRightPadding} 1.5rem`, medium: `2.5rem ${leftRightPadding} 3rem`, large: `3rem ${leftRightPadding} 4rem` };
const CardXContent = styled.div.attrs({ className: 'card-x-content' })`
    display: flex;
    padding: ${props => contentPadding[props.size]};
`

CardXContent.propTypes = {
    children: PropTypes.node.isRequired,
    isCentered: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

CardXContent.defaultProps = {
    size: 'medium'
};

export default CardXContent;