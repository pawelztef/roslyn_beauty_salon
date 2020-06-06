import React from 'react'
import variables from '../assets/sass/1-base/_variables.sass'
import styled from 'styled-components'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

const Header = styled.header`
  background: white;
`

export default function NavigationBar() {
  return(
    <Header className="pz-nav">
      <TopNav /> 
      <BottomNav /> 
    </Header>
  )
}


