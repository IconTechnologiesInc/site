import { Icon as BloomerIcon } from 'bloomer'
import styled from 'styled-components'

const Icon = styled(BloomerIcon)`
    color: ${props => props.theme.colors[props.color]}
`

Icon.defaultProps = {
    color: 'primary'
}

export default Icon;
