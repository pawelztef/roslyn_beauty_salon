import React from 'react'
import './assets/sass/main.sass'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import Page from './components/Page'
import Footer from './components/Footer'
import Navigation from './components/Navigation'


class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="pz-body-wrapper">
          <div className="pz-page-wrapper">

            <Navigation />

            <Page />

            <Footer />

          </div>
        </div>
      </Router>
    )
  }
}

export default App
