import React from 'react'
import styled from 'styled-components'

const BrandHref = styled.a`
`
const BrandImage = styled.img`
  max-height: 50px;
`

export default function Brand(props) {
  return(
  <BrandHref className="pz-nav__brand"
    href="https://pawelztef.me"
    target="_blank">
    <BrandImage className="pz-nav__brand-img" 
      src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/logo_retina.png"/>
  </BrandHref>
  )
}
