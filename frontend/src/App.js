import React from 'react'
import './assets/sass/main.sass'
import mockPage from './utils/page'

import CardGroup from './components/CardGroup'
import Layout from './components/Layout'

function App() {
  console.log('App.render mockPage', mockPage)
  return (
    <>
      <Layout>
         <CardGroup ClassName={mockPage.content[1].name} data={mockPage.content[1]} />
      </Layout>
    </>
  )
}

export default App
