import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardXItem = styled.div.attrs({ className: 'card-x-item' })``

CardXItem.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardXItem;