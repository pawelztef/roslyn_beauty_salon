import React from 'react'
import variables from '../assets/sass/1-base/_variables.sass'
import styled from 'styled-components'
import { RiMapPin2Line, RiPhoneLine } from "react-icons/ri"
import SocialList from './SocialList'

const Nav = styled.nav`
  font-size: .9rem;
  padding-top: 0.9em;
  padding-bottom: 0.9em;
`
const ContactDetials = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-grow: 2;
`

export default function TopNav() {
  return (
    <Nav className="pz-nav__top-row">
      <div className="pz-container-wrapper">
        <ContactDetials className="pz-nav__contact-details pz-invisible-lg">
          <span>
            <RiMapPin2Line /> 8500, Lorem Street, Chicago, IL, 55030
          </span>
          <span>
            <RiPhoneLine /> 0 (800) 123-456
          </span>
        </ContactDetials>
        <SocialList />
      </div>
    </Nav>
  )
}
