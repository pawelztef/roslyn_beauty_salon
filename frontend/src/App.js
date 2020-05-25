import React from 'react'
import logo from './logo.svg'
import './App.css'
import mockPage from './utils/page'
import Card from './components/Card'

function App() {
  console.log('App.render mockPage', mockPage)
  return (
    <div className="App">
     <Card data={mockPage.content[1]} />
    </div>
  )
}

export default App
