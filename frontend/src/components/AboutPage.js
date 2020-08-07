import React from 'react'
import mockPage from '../utils/page'

import Header from './Header'
import Welcome from './Welcome'
import EmptySpace from './EmptySpace'
import Newsletter from './Newsletter'
import Team from './Team'
import OurStory from './OurStory'
import bg from '../assets/images/header-grad.png'

class AboutPage  extends React.Component {
  render() {
    return(
      <div className="pz-page-container-wrapper">
        <Header 
          title="About Us"
          backgroundImage={bg}
        />
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
