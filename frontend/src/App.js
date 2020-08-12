import React from 'react'
import './assets/sass/main.sass'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import Axios from 'axios'
import NavigationBar from './components/NavigationBar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import TeamPage from './components/TeamPage'
import GalleryPage from './components/GalleryPage'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'



class App extends React.Component {

  state = {
    footer: {
      mobileMenuOpen: false,
      menuPages: {},
      contactDetails: {},
      logo: {},
      socialMedia: {},
      isLoading: true
    },
    navbar: {
      menu: {},
      logo: {},
      callToAction: {},
      contactDetails: {},
      socialMedia: {},
      isLoading: true
    }
  }

  async componentDidMount() {
    const footerRes = await Axios.get(process.env.REACT_APP_DOMAIN+'/footer')
    const menuPages = footerRes.data[0].menu.pages
    const contactDetails = footerRes.data[0].contact_details
    const footerLogo = footerRes.data[0].logo
    const socialMedia = footerRes.data[0].social_media.map((entry) => {
      return({
        id: entry.id,
        url: entry.url,
        type: entry.type
      })
    })

    const navbarRes = await Axios.get(process.env.REACT_APP_DOMAIN + '/navbar')
    const data = navbarRes.data[0]
    const { logo, call_to_action, contact_details, menu, social_media } = data

    this.setState({
      footer: {
        menuPages,
        contactDetails,
        logo: footerLogo,
        socialMedia,
        isLoading: false
      },
      navbar: {
        menu,
        logo: logo,
        callToAction: call_to_action,
        contactDetails: contact_details,
        socialMedia: social_media,
        isLoading: false
      }
    })
  }

  mobileMenuToggleHandler = () => {
    this.setState((prevState) => {
      console.log('App.mobileMenuToggleHandler prevState', prevState)
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }


  render() {
    const { navbar } = this.state
    const { footer } = this.state
    return (
      <Router>
        <div className="pz-body-wrapper">
          <div className="pz-page-wrapper">
            {!navbar.isLoading &&
              <>
                <NavigationBar 
                  mobileMenuToggleHandler={this.mobileMenuToggleHandler} 
                />
                <MobileNav 
                  show={this.state.mobileMenuOpen}
                  click={this.mobileMenuToggleHandler} 
                  navbar={navbar}
                />
              </>
            }

            <Switch>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/team">
                <TeamPage />
              </Route>
              <Route exact path="/gallery">
                <GalleryPage />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/services">
                <ServicesPage />
              </Route>
              <Route exact path="/">
                <HomePage/>
              </Route>
            </Switch>

            {!this.state.footer.isLoading &&
             <Footer footer={this.state.footer} />
            }     

          </div>
        </div>
      </Router>
    )
  }
}

export default App
