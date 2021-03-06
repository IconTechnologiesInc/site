import styled from 'styled-components'

const InfoCallout = styled.div`
    &&& {
        padding: calc(100vh * .11) calc(100vw * .05);
        min-height: 70vh;
        position: relative;
        background-color: ${props => props.theme.colors[props.color]};
        z-index: 1;

        ${props => props.theme.responsiveness.mobile(`
            border-right: none;
            margin-top: -3rem;
            margin-left: auto;

            &:after {
                display: none;
            }
        `)}
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 97%;
        bottom: 0;
        clip-path: polygon(0 0, 34% 0, 100% 100%, 0% 100%);
        background-color: ${props => props.theme.colors[props.color]};
        min-width: 100px;
        z-index: -1;
    }
`

InfoCallout.defaultProps = {
    color: 'default'
}

export default InfoCallout;