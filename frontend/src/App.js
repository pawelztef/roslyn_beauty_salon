import React from 'react'
import './assets/sass/main.sass'
import mockPage from './utils/page'

import CardGroup from './components/CardGroup'
import Slider from './components/Slider'
import Banner from './components/Banner'
import Welcome from './components/Welcome'
import EmptySpace from './components/EmptySpace'
import NavigationBar from './components/NavigationBar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Appointment from './components/Appointment'
import Team from './components/Team'
import Services from './components/Services'
import Testimony from './components/Testimony'
import Portfolio from './components/Portfolio'

class App extends React.Component {
  state = {
    mobileMenuOpen: false
  }

  mobileMenuToggleHandler = () => {
    this.setState((prevState) => {
      console.log('App.mobileMenuToggleHandler prevState', prevState)
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }

  render() {
    return (
      <>
        <div className="pz-body-wrapper">
          <div className="responsivnes-indicator"></div>
          <div className="pz-page-wrapper">

            <NavigationBar mobileMenuToggleHandler={this.mobileMenuToggleHandler} />
            <MobileNav show={this.state.mobileMenuOpen}
              click={this.mobileMenuToggleHandler} />

            <div className="pz-page-container-wrapper">

              <Slider data={mockPage.content[0]}/> 


              <CardGroup data={mockPage.content[1]} />

              <Banner data={mockPage.content[2]} />

              <Welcome data={[mockPage.content[3], mockPage.content[4]]} />

              <Testimony/>

              <Services />

              <Portfolio />

              <Team />

              <Appointment />

              <Newsletter />

              <Footer />

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
