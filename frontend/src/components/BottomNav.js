import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'

const Nav = styled.nav`
  padding-bottom: 1.8em;
  padding-top: 1.8em;
`
export default function BottomNav() {
  return(
    <Nav className="pz-nav__bottom-row">
      <div className="pz-container-wrapper">

        <Brand />

      </div>
    </Nav>
  )
}
