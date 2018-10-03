import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'

const leftRightPadding = '2rem'
const contentPadding = { small: `1rem ${leftRightPadding} 1.5rem`, medium: `2.5rem ${leftRightPadding} 3rem`, large: `3rem ${leftRightPadding} 4rem` };
const Content = styled.div`
    display: flex;
    padding: ${props => contentPadding[props.size]};
`

const CardXContent = props => {
    
    return (
        <Content size={props.size} className={cx('card-x-content', props.className)} isCentered={props.isCentered}>
            {props.children}
        </Content>
    )
}

CardXContent.propTypes = {
    children: PropTypes.node.isRequired,
    isCentered: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

CardXContent.defaultProps = {
    size: 'medium'
};

export default CardXContent;