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
    console.log('servicesBannerData ', servicesBannerData)
    return(
      <div className="pz-page-container-wrapper">

        <Slider {...sliderData} /> 

        <CardGroup {...servicesBannerData} />

        <Banner data={mockPage.content[2]} />

        <Welcome data={[mockPage.content[3], mockPage.content[4]]} />

        <Testimony/>

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
