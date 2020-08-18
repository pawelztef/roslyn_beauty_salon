import React from 'react'
import mockPage from '../utils/page'

import CardGroup from './CardGroup'
import Slider from './Slider'
import Banner from './Banner'
import Welcome from './Welcome'
import Newsletter from './Newsletter'
import Appointment from './Appointment'
import Team from './Team'
import Services from './Services'
import Testimony from './Testimony'
import Portfolio from './Portfolio'

class HomePage extends React.Component {


  render() {
    const components  = this.props.components
    const sliderData = components.find( cp => cp.__component === 'page.hero-slider' )
    const servicesBannerData = components.find( cp => cp.__component === 'page.services-banner' )
    const simpleBannerData = components.find( cp => cp.__component === 'page.simple-banner' )
    const welcomeSectionData = components.find( cp => cp.__component === 'page.welcome' )
    const testimonySectionData = components.find( cp => cp.__component === 'page.testimony' )
    console.log('testimonySectionData', testimonySectionData)
    return(
      <div className="pz-page-container-wrapper">

        <Slider {...sliderData} /> 

        <CardGroup {...servicesBannerData} />

        <Banner {...simpleBannerData} />

        <Welcome {...welcomeSectionData} />

        <Testimony {...testimonySectionData}/>

        <Services />

        <Portfolio />

        <Team />

        <Appointment />

        <Newsletter />


      </div>

    )
  }
}

export default HomePage
