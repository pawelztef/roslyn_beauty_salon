import React from 'react'
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


