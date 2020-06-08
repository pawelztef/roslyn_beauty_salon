import React from 'react'
import styled from 'styled-components'


export default function MainMenu() {
  return(
    <ul className="pz-menu">
      <li className="pz-menu__item pz-menu__item-active"> 
        <a href="htts://pawelztef.me">Services</a>
      </li>
      <li className="pz-menu__item"> 
        <a href="htts://pawelztef.me">About</a>
      </li>
      <li className="pz-menu__item"> <a href="htts://pawelztef.me">Team</a>
      </li>
      <li className="pz-menu__item"> 
        <a href="htts://pawelztef.me">Contact</a>
      </li>
      <li className="pz-menu__item">
        <a href="htts://pawelztef.me">Blog</a>
      </li>
    </ul>
  )
}
