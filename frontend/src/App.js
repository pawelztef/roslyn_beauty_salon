import React from 'react'
import './assets/sass/main.sass'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import HomePage from './components/Home'

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
      <Router>
        <div className="pz-body-wrapper">
          <div className="responsivnes-indicator"></div>
          <div className="pz-page-wrapper">
            <NavigationBar mobileMenuToggleHandler={this.mobileMenuToggleHandler} />
            <MobileNav show={this.state.mobileMenuOpen}
              click={this.mobileMenuToggleHandler} />


            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>



            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
