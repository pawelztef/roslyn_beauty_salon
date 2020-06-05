import React from 'react'
import styled from 'styled-components'
import { FiPhone, FiMapPin } from "react-icons/fi"

const nav = styled.nav`
  font-size: .9rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`
const ContactDetials = styled.div`

`

export default function TopNav() {
  return (
    <nav className="pz-nav__top-row">
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
    </nav>
  )
}
