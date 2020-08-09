import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import AppointmentButton from './AppointmentButton'
import MainMenu from './MainMenu'
import BurgerButton from './BurgerButton'

const Nav = styled.nav`
  padding-bottom: 1.8em;
  padding-top: 1.8em;
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: inherit;
`

class BottomNav extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const nav = document.querySelector('.pz-nav__bottom-row')
    const topOfBottomNav = nav.offsetTop
    window.addEventListener('scroll', () => {
      if(window.scrollY >= topOfBottomNav) {
        nav.classList.add('pz-nav__fixed')
        document.body.style.paddingTop = (nav.offsetHeight - 5) + "px"
      } else {
        nav.classList.remove('pz-nav__fixed')
        document.body.style.paddingTop = 0
      }
    })
  }

  render(){
    return(
      <Nav className="pz-nav__bottom-row">
        <div className="pz-container-wrapper">
          {this.props.logo && this.props.logo.image &&
            <Brand  {...this.props.logo}/>
          }
          <MenuWrapper className="pz-invisible-md">
            <MainMenu />
          </MenuWrapper>
          {this.props.callToAction &&
            <AppointmentButton {...this.props.callToAction}/>
          }
          <BurgerButton click={this.props.mobileMenuToggleHandler} />
        </div>
      </Nav>
    )
  }  
}

export default BottomNav
