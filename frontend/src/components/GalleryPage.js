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
import bg from '../assets/images/header-grad.png'
import Header from './Header'

class GalleryPage  extends React.Component {
  render() {
    return(
      <div className="pz-page-container-wrapper">
        <Header 
          title="Gallery"
          backgroundImage={bg}
        />



      <Newsletter /> 
    </div>
    )
  }
}

export default GalleryPage 
