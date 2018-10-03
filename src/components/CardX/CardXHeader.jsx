import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'

const leftRightPadding = '2rem'
const headerPadding = { small: `1rem ${leftRightPadding}`, medium: `2.5rem ${leftRightPadding}`, large: `4rem ${leftRightPadding}` };
const Header = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;
    justify-content: ${props => props.isCentered ? 'center' : 'inherit'};
    padding: ${props => headerPadding[props.size]};
    background-color: ${props => props.backgroundColor};
    
    .card-x-item:not(:last-child) {
        margin-right: 10px;
    }
`

const CardXHeader = props => {

    return (
        <Header 
            backgroundColor={props.backgroundColor}
            className={cx('card-x-header', props.className)}
            direction={props.direction}
            isCentered={props.isCentered} 
            size={props.size}
        >
            {props.children}
        </Header>
    )
}

CardXHeader.propTypes = {
    children: PropTypes.node.isRequired,
    isCentered: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    backgroundColor: PropTypes.string,
    direction: PropTypes.oneOf(['column', 'row'])
}

CardXHeader.defaultProps = {
    size: 'medium',
    backgroundColor: 'inherit',
    direction: 'row'
};

export default CardXHeader;