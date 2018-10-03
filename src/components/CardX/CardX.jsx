import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    box-shadow: 0 2px 60px 0 rgba(15, 16, 18, 0.18);
`

const CardX = ({ children, className }) => {

    return (
        <Container className={cx('card-x', className)}>{children}</Container>
    )
}

CardX.propTypes = {
    children: PropTypes.node.isRequired
};

export default CardX
