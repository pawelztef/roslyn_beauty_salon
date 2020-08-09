import React from 'react'
import styled from 'styled-components'

const BrandHref = styled.a`
`
const BrandImage = styled.img`
  max-height: 50px;
`

export default function Brand(props) {
  return(
    <>
      {props.image &&
        <BrandHref className="pz-nav__brand"
          href={process.env.REACT_APP_DOMAIN + props.url}>
          <BrandImage className="pz-nav__brand-img" 
            src={process.env.REACT_APP_DOMAIN + props.image.url}
            alt={props.alt} 
          />
        </BrandHref>
      }
    </>
  )
}
