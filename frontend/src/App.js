import React from 'react'
import './assets/sass/main.sass'

import NavigationBar from './components/NavigationBar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import Home from './components/Home'

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

            <Home />

            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default App
