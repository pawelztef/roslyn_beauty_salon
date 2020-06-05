import React from 'react'
import styled from 'styled-components'
import { FiPhone, FiMapPin } from "react-icons/fi"

  const Header = styled.header`
    background: white;
    
  `

  const TopNav = styled.nav`
    font-size: .9rem;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  `
  const BottomNav = styled.nav`
    padding-bottom: 1.8em;
    padding-top: 1.8em;
  `

  const Brand = styled.a`
  `

  const BrandImage = styled.img`
    max-height: 46px;
  `
  
  const ContactDetials = styled.div`

  `

export default function NavigationBar() {

  return(

    <Header className="pz-nav">
        <TopNav className="pz-nav__top-row">
          <div className="pz-container-wrapper">
            <ContactDetials>
              <span>
                <FiMapPin /> hello
              </span>
              <span>
                <FiPhone /> hello
              </span>
            </ContactDetials>
          </div>
        </TopNav>
        <BottomNav className="pz-nav__bottom-row">
          <div className="pz-container-wrapper">

            <Brand className="pz-nav__brand"
                   href="https://pawelztef.me"
                   target="_blank">
              <BrandImage className="pz-nav__brand-img" 
                   src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/logo_retina.png"/>
            </Brand>

          </div>
        </BottomNav>
    </Header>

  )
}


