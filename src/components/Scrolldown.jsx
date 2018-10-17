import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin-bottom: 20px;

    a {
        animation: nudgeMouse 2.4s cubic-bezier(0.250,0.460,0.450,0.940) infinite;
        border: 0;
        text-align: center;
        opacity: 1;
        transition: opacity .4s ease;
        display: inline-block;
        overflow: visible;
        animation: nudgeMouse 2.4s cubic-bezier(0.250,0.460,0.450,0.940) infinite;
        border-radius: 100px;

        &:before {
            position: absolute;
            content: '';
            display: block;
            left: 50%;
            margin-left: -1px;
            top: 22px;
            background-color: rgba(255, 255, 255, 0.5);
            width: 2px;
            height: 6px;
            border-radius: 10px;
            transition: background-color .55s cubic-bezier(.5,.1,.07,1);
            animation: trackBallSlide 2.4s cubic-bezier(0.000,0.000,0.725,1.000) infinite;
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            display: block;
            width: 30px;
            height: 45px;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 30px;
            margin-left: -15px;
        }

        svg {
            width: 30px;
            text-align: center;
            cursor: pointer;
            position: relative;
            z-index: 100;
            height: 45px;

            path {
                stroke-dashoffset: 120;
                stroke-dasharray: 120;
                stroke-width: 2px;
                fill: transparent;

                &:hover {
                    animation: mouse-scroll-btn-roll-out .55s cubic-bezier(.5,.1,.07,1) forwards;
                }
            }
        }
    }
`

class Scrolldown extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        document.querySelector(this.props.scrollTo).scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <Container>
                <a onClick={this.onClick}>
                    <svg viewBox="0 0 30 45">
                        <path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path> 
                    </svg>
                </a>
            </Container>
        )
    }

}

Scrolldown.defaultProps = {
    href: '#'
}

export default Scrolldown;