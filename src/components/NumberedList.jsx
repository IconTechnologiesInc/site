import styled from 'styled-components'

export default styled.ol.attrs({ className: 'numbered-list' })`
    position: relative;
    counter-reset: li;

    &:after {
        content: " ";
        position: absolute;
        display: block;
        width: 1px;
        background-color: ${props => props.theme.colors.greyLighter};
        z-index: 1;
        top: 40px;
        bottom: 0;
        left: 40px;
    }

    & > li {
        position: relative;
        list-style: none;
        padding-left: 125px;
        color: ${props => props.theme.colors.grey};

        .list-content {
            transform: translateX(60px) translateZ(0);
            opacity: 0;
            transition: transform .7s cubic-bezier(0.165,0.84,0.44,1) .2s,opacity .7s cubic-bezier(0.165,0.84,0.44,1) .2s;
        }

        &:not(:last-child) {
            margin-bottom: calc(100vh * .3);
        }

        &[data-emergence="visible"] {
            .list-content {
                opacity: 1;
                transform: translateX(0px) translateY(0px) translateZ(0);
            }

            &:before {
                transform: scale(1);
                opacity: 1;
            }
        }

        &:before {
            content: counter(li);
            counter-increment: li;
            color: ${props => props.theme.colors.secondary};
            position: absolute;
            top: 0;
            left: 0;
            font-size: 2rem;
            margin-right: 18px;
            opacity: 0;
            transform: scale(0);
            width: 80px;
            height: 80px;
            transition: transform .6s, opacity .2s;
            line-height: 80px;
            border: 2px solid ${props => props.theme.colors.greyLighter};
            text-align: center;
            border-radius: 100px;
            z-index: 10;
            background-color: ${props => props.theme.background};
        }
    }
`