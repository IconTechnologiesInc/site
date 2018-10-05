import PropTypes from 'prop-types'
import styled from 'styled-components'

const leftRightPadding = '2rem'
const headerPadding = { small: `1rem ${leftRightPadding}`, medium: `2.5rem ${leftRightPadding}`, large: `4rem ${leftRightPadding}` };
const Header = styled.div.attrs({ className: 'card-x-header has-text-grey-dark' })`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;
    justify-content: ${props => props.isCentered ? 'center' : 'inherit'};
    padding: ${props => headerPadding[props.size]};
    background-color: ${props => props.backgroundColor};

    .fa {
        color: ${props => props.theme.primary};
    }
    
    .card-x-item {
        margin: 5px;
    }
`

Header.propTypes = {
    children: PropTypes.node.isRequired,
    isCentered: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    backgroundColor: PropTypes.string,
    direction: PropTypes.oneOf(['column', 'row'])
}

Header.defaultProps = {
    size: 'medium',
    backgroundColor: 'inherit',
    direction: 'row'
};

export default Header;