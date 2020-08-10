import React from 'react'
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
  justify-content: flex-end; 
  flex-grow: 2;
`

export default function TopNav(props) {
  return (
    <Nav className="pz-nav__top-row pz-invisible-md">
      <div className="pz-container-wrapper">
        {props.contactDetails.id &&
          <ContactDetials className="pz-nav__contact-details">
            <span>
              <RiMapPin2Line /> {props.contactDetails.address}
            </span>
            <span>
              <RiPhoneLine /> {props.contactDetails.office_phone}
            </span>
          </ContactDetials>
        }
        {props.socialMedia && props.socialMedia[0] &&
          <SocialList socialMedia={props.socialMedia} />
        }
      </div>
    </Nav>
  )
}
