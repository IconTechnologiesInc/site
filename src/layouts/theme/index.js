import { css } from 'styled-components'
import colors from './colors'
import fonts from './fonts'

const gap = 64;
const calculateResponsiveSize = initialSize => initialSize + (2 * gap);
const toPx = size => `${size}px`
const r = {
    gap: gap,
    tablet: 769,
    desktop: calculateResponsiveSize(960),
    widescreen: calculateResponsiveSize(1152),
    fullhd: calculateResponsiveSize(1344),

};

export default {
    background: colors.whiteTer,
    fonts,
    colors,
    responsiveness: {
        from: (device, content) => css`
            @media screen and (min-width: ${toPx(device)}) {
                ${content}
            }
        `,
        until: (device, content) => css`
            @media screen and (max-width: ${toPx(device - 1)}) {
                ${content}
            }
        `,
        mobile: content => css`
            @media screen and (max-width: ${toPx(r.tablet - 1)}) {
                ${content}
            }
        `,
        tablet: content => `
            @media screen and (min-width: ${toPx(r.tablet)}), print {
                ${content}
            }
        `,
        touch: content => `
            @media screen and (max-width: ${toPx(r.desktop - 1)}) {
                ${content}
            }
        `,
        desktop: content => `
            @media screen and (min-width: ${toPx(r.desktop)}) {
                ${content}
            }
        `,
        untilWidescreen: content => `
            @media screen and (max-width: ${toPx(r.widescreen - 1)}) {
                ${content}
            }
        `,
        widescreen: content => `
            @media screen and (min-width: ${toPx(r.widescreen)}) {
                ${content}
            }
        `,
        untilFullhd: content => `
            @media screen and (max-width: ${toPx(r.fullhd - 1)}) {
                ${content}
            }
        `,
        fulhd: content => `
            @media screen and (min-width: ${toPx(r.fullhd)}) {
                ${content}
            }
        `
    }
}