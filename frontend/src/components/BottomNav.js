import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  padding-bottom: 1.8em;
  padding-top: 1.8em;
`
const Brand = styled.a`
`
const BrandImage = styled.img`
  max-height: 46px;
`

export default function BottomNav() {
  return(
    <Nav className="pz-nav__bottom-row">
      <div className="pz-container-wrapper">

        <Brand className="pz-nav__brand"
          href="https://pawelztef.me"
          target="_blank">
          <BrandImage className="pz-nav__brand-img" 
            src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/logo_retina.png"/>
        </Brand>

      </div>
    </Nav>
  )
}
