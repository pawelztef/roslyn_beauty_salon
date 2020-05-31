import React from 'react'
import './assets/sass/main.sass'
import mockPage from './utils/page'

import CardGroup from './components/CardGroup'
import Slider from './components/Slider'
import Banner from './components/Banner'
import Welcome from './components/Welcome'
import Layout from './components/Layout'

function App() {
  console.log('App.render mockPage', mockPage)
  return (
    <>
      <Layout>
          <Slider data={mockPage.content[0]}/> 
          <div class="pz-container-wrapper">
             <CardGroup data={mockPage.content[1]} />
             <Banner data={mockPage.content[2]} />
          </div>
             <Welcome data={[mockPage.content[3], mockPage.content[4]]} />
      </Layout>
    </>
  )
}

export default App
