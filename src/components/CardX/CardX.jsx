import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardX = styled.div.attrs({ className: 'card-x' })`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    box-shadow: 0 2px 60px 0 rgba(15, 16, 18, 0.18);
`

CardX.propTypes = {
    children: PropTypes.node.isRequired
};

export default CardX
