import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'


export default function NavigationBar(props) {
  return(
    <header className="pz-nav">
      <TopNav /> 
      <BottomNav mobileMenuToggleHandler={props.mobileMenuToggleHandler} /> 
    </header>
  )
}


