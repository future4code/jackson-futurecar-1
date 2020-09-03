import styled from 'styled-components'

const StyleDetails = styled.p`

display:${props => props.visibility ? 'block' : 'none'};
` 

export default StyleDetails