import React from 'react'
import variables from '../assets/sass/1-base/_variables.sass'
import styled from 'styled-components'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import MobileNav from './MobileNav'

const Header = styled.header`
`

export default function NavigationBar(props) {
  return(
    <Header className="pz-nav">
      <TopNav /> 
      <BottomNav mobileMenuToggleHandler={props.mobileMenuToggleHandler} /> 
    </Header>
  )
}


