import React from 'react'

import CardGroup from './components/CardGroup'
import Slider from './components/Slider'
import Banner from './components/Banner'
import Welcome from './components/Welcome'
import Newsletter from './components/Newsletter'
import Appointment from './components/Appointment'
import Team from './components/Team'
import Services from './components/Services'
import Testimony from './components/Testimony'
import Portfolio from './components/Portfolio'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import ContactInfoWithMap from './components/ContactInfoWithMap'
import GoogleMap from './components/GoogleMap'
import PlainContactDetails from './components/PlainContactDetails'
import ContactForm from './components/ContactForm'
import Gallery from './components/Gallery'

const componentsMapping = {
  SLIDER: 'page.hero-slider',
  CARD_GROUP: 'page.services-banner',
  BANNER: 'page.simple-banner',
  WELCOME: 'page.welcome',
  TESTIMONY: 'page.testimony',
  SERVICES: 'page.services-list',
  PORTFOLIO: 'page.gellery-banner',
  APPOINTMENT_FORM: 'page.appointment-form',
  NEWSLETTER_FORM: 'page.newsletter-form',
  CONTACT_FORM: 'page.contact-form',
  HERO: 'page.hero',
  CONTACT_INFO: 'page.contact-info',
  OUR_STORY: 'page.our-story',
  GALLERY: 'page.gallery',
  MAP: 'general.maps',
  CONTACT_DETAILS: 'general.contact-details'
}


const renderComponents = (components) => {
  const list = components.map((component) => {
    switch(component.__component) {
      case componentsMapping.SLIDER:
        return <Slider key={1} {...component} />
      case componentsMapping.CARD_GROUP:
        return <CardGroup key={2} {...component} />
      case componentsMapping.BANNER:
        return <Banner key={3} {...component} />
      case componentsMapping.WELCOME:
        return <Welcome key={4} {...component} />
      case componentsMapping.TESTIMONY:
        return <Testimony key={5} {...component} />
      case componentsMapping.SERVICES:
        return <Services key={6} {...component} />
      case componentsMapping.PORTFOLIO:
        return <Portfolio key={7} {...component} />
      case componentsMapping.APPOINTMENT_FORM:
        return <Appointment key={8} {...component} />
      case componentsMapping.NEWSLETTER_FORM:
        return <Newsletter key={9} {...component} />
      case componentsMapping.CONTACT_FORM:
        return <ContactForm key={10} {...component} />
      case componentsMapping.HERO:
        return <Hero key={11} {...component} />
      case componentsMapping.CONTACT_INFO:
        return <ContactInfoWithMap key={12} {...component} />
      case componentsMapping.OUR_STORY:
        return <OurStory key={13} {...component} />
      case componentsMapping.GALLERY:
        return <Gallery key={14} {...component} />
      case componentsMapping.MAP:
        return <GoogleMap key={15} {...component} />
      case componentsMapping.CONTACT_DETAILS:
        return <PlainContactDetails key={16} {...component} />
    }
  })
  return list
}

export default renderComponents 
