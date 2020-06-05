import React from 'react'
import './assets/sass/main.sass'
import mockPage from './utils/page'

import CardGroup from './components/CardGroup'
import Slider from './components/Slider'
import Banner from './components/Banner'
import Welcome from './components/Welcome'
import EmptySpace from './components/EmptySpace'
import NavigationBar from './components/NavigationBar'

function App() {
  console.log('App.render mockPage', mockPage)
  return (
    <>
      <div className="pz-body-wrapper">
        <div className="responsivnes-indicator"></div>
          <div className="pz-page-wrapper">

            <NavigationBar />

            <div className="pz-page-container-wrapper">

            <Slider data={mockPage.content[0]}/> 

              <div class="pz-container-wrapper">

                <CardGroup data={mockPage.content[1]} />

                <Banner data={mockPage.content[2]} />

              </div>

            <Welcome data={[mockPage.content[3], mockPage.content[4]]} />

            </div>
          </div>

        <EmptySpace />
      </div>
    </>
  )
}

export default App
