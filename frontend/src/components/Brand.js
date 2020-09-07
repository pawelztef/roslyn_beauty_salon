import React from 'react'
import styled from 'styled-components'

const BrandHref = styled.a`
`
const BrandImage = styled.img`
  height: auto;
  width: 170px;
  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 992px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 576px) {
    width: 100px;
  }
  @media (max-width: 321px) {
    width: 100px;
  }
`

export default function Brand(props) {
  console.log('mobile ', props.mobile)
  return(
    <>
      {props.image &&
        <BrandHref className="pz-nav__brand"
          href={process.env.REACT_APP_DOMAIN + props.url}>
          <BrandImage id="logo-top" className="pz-nav__brand-img" 
            src={props.mobile ? "/images/logo-reverse.svg" : process.env.REACT_APP_DOMAIN + props.image.url}
            alt={props.alt} 
          />
        </BrandHref>
      }
    </>
  )
}
