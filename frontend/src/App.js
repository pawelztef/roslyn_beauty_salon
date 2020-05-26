import React from 'react'
import './assets/sass/main.sass'
import mockPage from './utils/page'

import CardGroup from './components/CardGroup'
import Slider from './components/Slider'
import Layout from './components/Layout'

function App() {
  console.log('App.render mockPage', mockPage)
  return (
    <>
      <Layout>
            <Slider data={mockPage.content[0]}/> 
          <div class="container-wrapper">
             <CardGroup data={mockPage.content[1]} />
          </div>
      </Layout>
    </>
  )
}

export default App
