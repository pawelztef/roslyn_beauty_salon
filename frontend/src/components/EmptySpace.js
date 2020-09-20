import styled from 'styled-components'


export default styled.div`
  height: ${ props => props.small ? "2.3rem" : "4.67rem" } !important;
  @media (max-width: 768px) {
    height:  ${ props => props.small ? "4rem" : "3rem" } !important;
  }
  @media (max-width: 576px) {
    height:  ${ props => props.small ? "6rem" : "4rem" } !important;
  }
`
