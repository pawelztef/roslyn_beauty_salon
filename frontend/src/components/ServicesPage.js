import React from 'react'
import mockPage from '../utils/page'

import CardGroup from './CardGroup'
import Banner from './Banner'
import Newsletter from './Newsletter'
import Services from './Services'
import bg from '../assets/images/header-grad.png'
import Header from './Header'

class ServicesPage extends React.Component {
  render() {
    return(
      <div className="pz-page-container-wrapper">
        <Header 
          title="Our Services"
          backgroundImage={bg}
        />
        <CardGroup data={mockPage.content[1]} />
        <Banner data={mockPage.content[2]} />
        <Services />
        <Newsletter />
      </div>
    )
  }
}

export default ServicesPage
