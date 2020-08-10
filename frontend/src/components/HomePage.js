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
    return(
      <div className="pz-page-container-wrapper">

        <Slider data={mockPage.content[0]}/> 


        <CardGroup data={mockPage.content[1]} />

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
