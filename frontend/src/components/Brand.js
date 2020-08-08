import React from 'react'
import styled from 'styled-components'

const BrandHref = styled.a`
`
const BrandImage = styled.img`
  max-height: 50px;
`

export default function Brand(props) {
  console.log(props.logoImageUrl)
  return(
      <BrandHref className="pz-nav__brand"
        href={process.env.REACT_APP_DOMAIN + props.url}>
        <BrandImage className="pz-nav__brand-img" 
          src={process.env.REACT_APP_DOMAIN + props.logoImageUrl }/>
      </BrandHref>
  )
}
