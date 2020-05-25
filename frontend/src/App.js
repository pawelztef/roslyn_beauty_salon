import React from 'react'
import './assets/sass/main.sass'
import mockPage from './utils/page'
import CardGroup from './components/CardGroup'

function App() {
  console.log('App.render mockPage', mockPage)
  return (
    <div className="App">
     <CardGroup ClassName={mockPage.content[1].name} data={mockPage.content[1]} />
    </div>
  )
}

export default App
