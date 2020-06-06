import React from 'react'
import styled from 'styled-components'
import variables from '../assets/sass/1-base/_variables.sass'

const MenuList = styled.ul`
  list-style: none;
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0 2rem;

`

const MenuItem = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  list-style: 0;
  border-radius: 30px;
`

export default function MainMenu() {
  return(
    <MenuList className="pz-menu pz-invisible-md">
      <MenuItem className="pz-menu__item pz-menu__item-active"> 
        <a href="htts://pawelztef.me">Services</a>
      </MenuItem>
      <MenuItem className="pz-menu__item"> 
        <a href="htts://pawelztef.me">About</a>
      </MenuItem>
      <MenuItem className="pz-menu__item"> 
        <a href="htts://pawelztef.me">Team</a>
      </MenuItem>
      <MenuItem className="pz-menu__item"> 
        <a href="htts://pawelztef.me">Contact</a>
      </MenuItem>
      <MenuItem className="pz-menu__item">
        <a href="htts://pawelztef.me">Blog</a>
      </MenuItem>
    </MenuList>
  )
}
