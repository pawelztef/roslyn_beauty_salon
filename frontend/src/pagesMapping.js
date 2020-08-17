import React from 'react'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import TeamPage from './components/TeamPage'
import GalleryPage from './components/GalleryPage'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import NotFound from './components/NotFound'
import TestPage from './components/TestPage'

const pagesMapping = {
  HOME: 'home',
  SERVICES: 'services',
  TEAM: 'team',
  GALLERY: 'gallery',
  ABOUT: 'about',
  CONTACT: 'contact',
  PRIVACY_POLICY: 'privacy_policy',
  TERMS_AND_CONDITIONS: 'terms_and_conditions',
  COOKIES_POLICY: 'cookies_policy',
  TEST: 'test',
  NOT_FOUND: 'not_found',
}

const renderPage = (page) => {

  switch(page.slug) {
    case pagesMapping.HOME:
      return <HomePage {...page}/>
    case pagesMapping.SERVICES:
      return <ServicesPage {...page}/>
    case pagesMapping.TEAM:
      return <TeamPage {...page}/>
    case pagesMapping.GALLERY:
      return <GalleryPage {...page}/>
    case pagesMapping.ABOUT:
      return <AboutPage {...page}/>
    case pagesMapping.CONTACT:
      return <ContactPage {...page}/>
    case pagesMapping.PRIVACY_POLICY:
      return <TestPage {...page}/>
    case pagesMapping.TERMS_AND_CONDITIONS:
      return <TestPage {...page}/>
    case pagesMapping.COOKIES_POLICY:
      return <TestPage {...page}/>
    case pagesMapping.TEST:
      return <TestPage {...page}/>
    case pagesMapping.NOT_FOUND:
      return <NotFound />
  }
}

export default renderPage
