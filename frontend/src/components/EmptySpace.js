import styled from 'styled-components'


export default styled.div`
  height: ${ props => props.small ? "3.3rem" : "6.67rem" } !important;
  @media (max-width: 768px) {
    height: 10rem !important;
  }
`
