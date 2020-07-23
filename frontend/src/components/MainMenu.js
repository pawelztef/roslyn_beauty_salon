import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function MainMenu() {
  return(
    <ul className="pz-menu">
      <li> 
        <NavLink 
          exact
          className="pz-menu__item" 
          activeClassName="pz-menu__item-active" 
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li> 
        <NavLink 
          className="pz-menu__item" 
          activeClassName="pz-menu__item-active" 
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li> 
        <NavLink 
          className="pz-menu__item" 
          activeClassName="pz-menu__item-active" 
          to="/team"
        >
          Team
        </NavLink>
      </li>
      <li> 
        <NavLink 
          className="pz-menu__item" 
          activeClassName="pz-menu__item-active" 
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
      <li> 
        <NavLink 
          className="pz-menu__item"
          activeClassName="pz-menu__item-active" 
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li> 
        <NavLink 
          className="pz-menu__item"
          activeClassName="pz-menu__item-active" 
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  )
}
