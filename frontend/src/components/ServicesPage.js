import React from 'react'
import mockPage from '../utils/page'

import CardGroup from './CardGroup'
import Banner from './Banner'
import Newsletter from './Newsletter'
import Services from './Services'
import bg from '../assets/images/header-grad.png'
import Hero from './Hero'

class ServicesPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const components  = this.props.components
    console.log('services components', components)
    const heroData = components.find( cp => cp.__component === 'page.hero' )
    const servicesBannerData = components.find( cp => cp.__component === 'page.services-banner' )
    console.log('services hero', heroData)
    return(
      <div className="pz-page-container-wrapper">
        <Hero {...heroData} />
        <CardGroup {...servicesBannerData} />
      </div>
    )
  }
}

export default ServicesPage
