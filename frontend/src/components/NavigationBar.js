import React from 'react'
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


