import Color from 'color'

const colors = {
    primary: 'hsl(198, 67%, 57%)',
    secondary: 'hsl(25, 77%, 58%)',
    tertiary: 'hsl(301.6, 30.2%, 49.4%)',

    black: 'hsl(0, 0%, 4%)',
    blackBis: 'hsl(0, 0%, 7%)',
    blackTer: 'hsl(0, 0%, 14%)',

    greyDarker: 'hsl(0, 0%, 21%)',
    greyDark: 'hsl(0, 0%, 29%)',
    grey: 'hsl(0, 0%, 48%)',
    greyLight: 'hsl(0, 0%, 71%)',
    greyLighter: 'hsl(0, 0%, 90%)',

    whiteTer: 'hsl(0, 0%, 96%)',
    whiteBis: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)',

    lighten: (color, percent) => Color(color).lighten(percent),
    darken: (color, percent) => Color(color).darken(percent)
}

colors.default = colors.greyDark;

export default colors;