import React from 'react'
import EmptySpace from './EmptySpace'
import Header from './Header'
import GoogleMap from './GoogleMap'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import Section from './Section'
import bg from '../assets/images/header-grad.png'

class ContactPage extends React.Component {
  render() {
    return(
      <div className="pz-contact-page pz-page-container-wrapper">
        <Header 
          title="Contact Us"
          backgroundImage={bg}
        />

        <EmptySpace />
        <GoogleMap />
        <EmptySpace />

        <div className="pz-contact-details__wrapper">
          <ContactDetails />
        </div>

        <Section 
          title="Send us a message"
          backgroundImage={bg}
        >
            <ContactForm />
          </Section>
      </div>

    )
  }
}

export default ContactPage
