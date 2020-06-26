import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function MainMenu() {
  return(
    <ul className="pz-menu">
      <li className="pz-menu__item pz-menu__item-active"> 
        <Link to="/">Home</Link>
      </li>
      <li className="pz-menu__item"> 
        <Link to="/services">Services</Link>
      </li>
      <li className="pz-menu__item"> 
        <Link to="/team">Team</Link>
      </li>
      <li className="pz-menu__item"> 
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="pz-menu__item">
        <Link to="/about">About</Link>
      </li>
      <li className="pz-menu__item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}
