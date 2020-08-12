import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import HomePage from './HomePage'
import ContactPage from './ContactPage'
import TeamPage from './TeamPage'
import GalleryPage from './GalleryPage'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'

class Page extends React.Component {

  render() {
    return(
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
    )
  }

}

export default Page
