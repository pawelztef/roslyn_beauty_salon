import React from 'react'
import mockPage from '../utils/page'

import CardGroup from './CardGroup'
import Header from './Header'
import Banner from './Banner'
import Welcome from './Welcome'
import EmptySpace from './EmptySpace'
import Newsletter from './Newsletter'
import Appointment from './Appointment'
import Team from './Team'
import Services from './Services'
import OurStory from './OurStory'
import Portfolio from './Portfolio'

class AboutPage  extends React.Component {
  render() {
    return(
      <div className="pz-page-container-wrapper">
        <Header title="About Us"/>
        <EmptySpace />
        <Welcome data={[mockPage.content[3], mockPage.content[4]]} />
        <OurStory />
        <Team />
        <Newsletter /> 
      </div>
    )
  }
}

export default AboutPage 
