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
  HERO: 'page.hero',
  CONTACT_INFO: 'page.contact-info',
  OUR_STORY: 'page.our-story'
}


const renderComponents = (components) => {
  console.log("components ", components)
  const list = components.map((component) => {
    switch(component.__component) {
      case componentsMapping.SLIDER:
        return <Slider {...component} />
      case componentsMapping.CARD_GROUP:
        return <CardGroup {...component} />
      case componentsMapping.BANNER:
        return <Banner {...component} />
      case componentsMapping.WELCOME:
        return <Welcome {...component} />
      case componentsMapping.TESTIMONY:
        return <Testimony {...component} />
      case componentsMapping.SERVICES:
        return <Services {...component} />
      case componentsMapping.PORTFOLIO:
        return <Portfolio {...component} />
      case componentsMapping.APPOINTMENT_FORM:
        return <Appointment {...component} />
      case componentsMapping.NEWSLETTER_FORM:
        return <Newsletter {...component} />
      case componentsMapping.HERO:
        return <Hero {...component} />
      case componentsMapping.CONTACT_INFO:
        return <ContactInfoWithMap {...component} />
      case componentsMapping.OUR_STORY:
        return <OurStory {...component} />
    }
  })
  console.log('list ', list)
  return list
}

export default renderComponents 
