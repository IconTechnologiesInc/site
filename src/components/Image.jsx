import React from 'react'
import PropTypes from 'prop-types'

const Image = props => {
    const { className, src, isRounded } = props
    return (
        <figure className={`image ${className}`}>
            <img src={src} className={isRounded ? 'is-rounded' : ''}/>
        </figure>
    )
}

Image.propTypes = {
    isRounded: PropTypes.bool,
    src: PropTypes.string.isRequired,
}

export default Image;