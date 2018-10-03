import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'

const Item = styled.div``

const CardXItem = (props) => {
    
    return (
        <Item className={cx('card-x-item', props.className)}>
            {props.children}
        </Item>
    )
}

CardXItem.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardXItem;