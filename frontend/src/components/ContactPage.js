import React from 'react'
import mockPage from '../utils/page'

import CardGroup from './CardGroup'
import Slider from './Slider'
import Banner from './Banner'
import Welcome from './Welcome'
import EmptySpace from './EmptySpace'
import Newsletter from './Newsletter'
import Appointment from './Appointment'
import Team from './Team'
import Services from './Services'
import Testimony from './Testimony'
import Portfolio from './Portfolio'
import Header from './Header'
import GoogleMap from './GoogleMap'
import ContactDetails from './ContactDetails'

class ContactPage extends React.Component {
  render() {
    return(
      <div className="pz-contact-page pz-page-container-wrapper">
        <Header title="Contact Us"/>
        <EmptySpace />
        <GoogleMap />
        <EmptySpace />
        <div className="pz-contact-details__wrapper">
          <ContactDetails />
        </div>
        

      </div>

    )
  }
}

export default ContactPage
